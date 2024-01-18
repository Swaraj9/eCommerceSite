import { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      let prods = await res.json();
      prods = prods.products;

      setProducts([...prods]);
    };

    getProducts();
  }, []);

  return (
    <div className="flex">
      <Navbar
        searchBar={true}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="mt-20 text-xl flex flex-wrap w-full align-middle justify-center">
        {products
          .filter((product) => product.title.toLowerCase().includes(searchInput.toLocaleLowerCase()))
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
