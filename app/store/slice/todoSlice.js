import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [{ ...action.payload, id: Math.random() * 100 }, ...state];
    },
    editTodo: (state, action) => {
      return state.map((item) => {
        if (item.id == action.payload.id) {
          return {
            id: action.payload.id,
            ...action.payload.data,
          };
        } else {
          return item;
        }
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
    setTodo: (_, action) => {
      return action.payload;
    },
  },
});

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
