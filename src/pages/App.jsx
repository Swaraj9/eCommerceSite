import Card from "../components/Card";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { useProducts } from "../hooks/useProducts.jsx";
import useDarkMode from "../hooks/useDarkMode.jsx";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCats, setSelectedCats] = useState([]);

  const products = useProducts();

  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="flex">
      <Navbar
        searchBar={true}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        selectedCats={selectedCats}
        setSelectedCats={setSelectedCats}
      />
      <div className="pt-40 bg-gradient-to-r from-[#c9def4] via-[#f5ccd4] to-[#b8a4c9] dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-800 text-xl flex flex-wrap w-full align-middle justify-center">
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
                return true;
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
