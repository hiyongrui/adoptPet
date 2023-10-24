import React from "react";
import ReactDOM from "react-dom"; // or import {createRoot} also can, then at bottom no need ReactDom.createRoot()

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
}; //Pet rubber stamp function, stamp it 3 time below

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
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
