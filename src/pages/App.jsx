import Card from "../components/Card";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { useProducts } from "../hooks/useProducts.jsx";
import { useEffect } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCats, setSelectedCats] = useState([]);

  const products = useProducts();

  return (
    <div className="flex">
      <Navbar
        searchBar={true}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        selectedCats={selectedCats}
        setSelectedCats={setSelectedCats}
      />
      <div className="pt-40 bg-neutral-800 text-xl flex flex-wrap w-full align-middle justify-center">
        {products
          .filter((product) => {
            if (selectedCats.length > 0) {
              if (
                product.title
                  .toLowerCase()
                  .includes(searchInput.toLocaleLowerCase()) &&
                selectedCats.includes(product.category)
              ) {
                return true;
              }
            } else {
              if (
                product.title
                  .toLowerCase()
                  .includes(searchInput.toLocaleLowerCase())
              ) {
                return true
              }
            }
          })
          .map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default App;
