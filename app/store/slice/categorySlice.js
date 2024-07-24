import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: ["All", "Work", "Personal", "Shopping", "Fitness", "Hobbies"],
  reducers: {
    addCategory: (state, action) => {
      return [ ...state,action.payload];
    },
    deleteCategory:(state,action)=>{
      return state.filter(item=>item!=action.payload)
    }
  },
});

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
