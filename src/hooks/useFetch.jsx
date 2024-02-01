import { useEffect, useState } from "react";

export function useFetch(url) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch(url);
      let things = await res.json();
      if (things.products) {
        things = things.products;

        setItems([...things]);
      } else {
        setItems([...things]);
      }
    };

    getItems();
  }, []);

  return items;
}
