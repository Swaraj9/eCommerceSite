import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { Login } from "./pages/Login.jsx";

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
    {
      path: "login/",
      element: <Login />,
    },
  ],
  { basename: "/eCommerceSite/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
