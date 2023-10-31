import { useState } from "react";
import { createRoot } from "react-dom/client"; // or import ReactDOM, then ReactDOM.createRoot() below
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SearchParams from "./SearchParams";
import Details from "./Details";
import AdoptedPetContext from "./AdoptedPetContext";

// one-way data flow, from parent App to child Pet

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // 1000 * 60 * 10 = 10 minutes
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null); // adoptedPet is whole hook as compared to const [theme, setTheme] = useState('darkmode');
  return (
    <div className="p-0 m-0" style={{background: "url(https://pets-images.dev-apis.com/pets/wallpaperA.jpg"}}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header>
              <Link to="/"> Adopt Me! </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
