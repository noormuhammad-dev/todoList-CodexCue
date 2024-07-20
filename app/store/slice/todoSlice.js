import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [{ ...action.payload, id: Math.random() * 100 }, ...state];
    },
  },
});

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
