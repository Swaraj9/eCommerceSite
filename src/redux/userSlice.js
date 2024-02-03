import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.token,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token",  action.payload);
    },
    removeToken: (state, action) => {
      state.token = "";
    },
  },
});

export const { addToken, removeToken } = userSlice.actions;

export default userSlice.reducer;
