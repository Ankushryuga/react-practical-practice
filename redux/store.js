import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";

export const store = configureStore({
  reducer: todoReducer,
});
