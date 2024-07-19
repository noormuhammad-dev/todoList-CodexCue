import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: [
    "All",
    "Work",
    "Personal",
    "Shopping",
    "Fitness",
    "Hobbies",
    "Workout",
  ],
  reducers: {},
});

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
