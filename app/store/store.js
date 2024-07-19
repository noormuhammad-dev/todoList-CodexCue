import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slice/todoSlice";
import { categoryReducer } from "./slice/categorySlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    category: categoryReducer,
  },
});
