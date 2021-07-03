import { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';
import useBreedList from './useBreedList';
import Results from './Results';

const ANIMALS = ['bird', 'car', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      );
    const json = await res.json();
    setPets(json.pets);
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  function updateAnimal(event) {
    setAnimal(event.target.value);
  }

  function updateBreed(event) {
    setBreed(event.target.value);
  }

  return (
    <div
      className="my-0 mx-auto w-11/12"
    >
      <form
        className="p-10 mb-10 rounder-lg bg-gray-200 shadow-lg flex flex-col
        justify-center items-center divide-y divide-gray-900"
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={updateLocation} 
            laceholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={updateAnimal}
            onBlur={updateAnimal}
            >
              <option />
              {
                ANIMALS.map(animal => (
                  <option value={animal} key={animal}>
                    {animal}
                  </option>
                ))
              }
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={updateBreed}
            onBlur={updateBreed}
            >
              <option />
              {
                breeds.map(breed => (
                  <option value={breed} key={breed}>
                    {breed}
                  </option>
                ))
              }
          </select>
        </label>
        <label htmlFor="theme">
          theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
            >
              <option value="darkblue">Dark Blue</option>
              <option value="peru">Peru</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
            </select>
        </label>
        <button style={ { backgroundColor: theme } }>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams;
