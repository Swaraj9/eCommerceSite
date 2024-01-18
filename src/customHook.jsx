import { useEffect, useState } from "react";

export function useProducts() {
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

  return products;
}
