import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     // ...[1, 2, 3, 4].map(i => React.createElement("h2", {}, i)),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Paulistinha",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaton Terrier",
//     }),
//   ]);
// };

const App = () => {
  return (
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    <Pet name="Beam" animal="Dog" breed="Wheaten Terrier" />
  </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
