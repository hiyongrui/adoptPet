const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Havanese"),
    ]);
}; //Pet rubber stamp function, stamp it 3 time below

const App = () => {
    return React.createElement(
        "div",
        {}, // or null, attriute on the HTML element like {id: "my-id"}
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
