// import { useEffect, useState } from "react";

// export function useCategories() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const getCategories = async () => {
//       const res = await fetch("https://dummyjson.com/products/categories");
//       let cats = await res.json();

//       setCategories([...cats]);
//     };

//     getCategories();
//   }, []);

//   return categories;
// }

//redundant code -> replaced by useFetch
