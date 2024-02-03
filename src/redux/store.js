import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
import cartReducer from "./cartSlice";
// import LoginReducer from "./LoginReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    // login: LoginReducer,
  },
});
