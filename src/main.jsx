import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "products/:productId",
      element: <Product />,
    },
    {
      path: "cart/",
      element: <Cart />,
    },
  ],
  { basename: "/eCommerceSite/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
