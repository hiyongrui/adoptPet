// import React from "react";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// }; //Pet rubber stamp function, stamp it 3 time below

//importing JSX, it will import React, built tool will handle that for you
//call Pet.jsx for vite to understand to transform, if Pet.js won't work
const Pet = (props) => {
    return (
        <div>
            <h1> {props.name} </h1>
            <h2>{props.animal}</h2>
            <h2>{props.breed}</h2>
        </div>
    )
}

export default Pet;
