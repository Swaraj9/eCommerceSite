import { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

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
    <div className="text-xl flex flex-wrap w-full align-middle justify-center">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          brand={product.brand}
          price={product.price}
          thumbnail={product.thumbnail}
        />
      ))}
    </div>
  );
}

export default App;
