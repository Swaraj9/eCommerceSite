import Card from "../components/Card";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { useProducts } from "../hooks/customHook.jsx";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const products = useProducts();

  return (
    <div className="flex">
      <Navbar
        searchBar={true}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="pt-24 bg-gradient-to-br from-[#003566] via-[#001D3D] to-[#000814] text-xl flex flex-wrap w-full align-middle justify-center">
        {products
          .filter((product) =>
            product.title
              .toLowerCase()
              .includes(searchInput.toLocaleLowerCase())
          )
          .map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              discount={product.discountPercentage}
              thumbnail={product.thumbnail}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
