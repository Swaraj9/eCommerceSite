import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
// import LoginReducer from "./LoginReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
