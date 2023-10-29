import { createRoot } from "react-dom/client"; // or import ReactDOM, then ReactDOM.createRoot() below
import SearchParams from "./SearchParams";

// one-way data flow, from parent App to child Pet

const App = () => {
  return <div>
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
