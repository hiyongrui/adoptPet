import React from "react";
import { createRoot } from "react-dom"; // or import ReactDOM, then ReactDOM.createRoot() below
import Pet from "./Pet";

// one-way data flow, from parent App to child Pet

const App = () => {
  return React.createElement(
    "div",
    {}, // or null, attriute on the HTML element like {id: "my-id"}
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        animal: "Dog",
        name: "Luna",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        animal: "Bird",
        name: "Pepper",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Doink",
        breed: "Mixed",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
