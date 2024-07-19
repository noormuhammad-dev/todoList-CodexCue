import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: "1",
      category: "Work",
      title: "Complete project report",
      description: "Finish the final  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more rreport for the project",
      date: "2024-07-20",
    },
    {
      id: "2",
      category: "Personal",
      title: "Call mom",
      description: "Catch up with mom over a call",
      date: "2024-07-18",
    },
    {
      id: "3",
      category: "Shopping",
      title: "Buy groceries",
      description: "Get milk, bread, and eggs from the store",
      date: "2024-07-18",
    },
    {
      id: "5",
      category: "Hobbies",
      title: "Read a book",
      description: "Finish reading the current book",
      date: "2024-07-21",
    },
    {
      id: "7",
      category: "Personal",
      title: "Call mom",
      description: "Catch up with mom over a call",
      date: "2024-07-18",
    },
    {
      id: "71",
      category: "Personal",
      title: "Call mom",
      description: "Catch up with mom over a call",
      date: "2024-07-18",
    },
    {
      id: "8",
      category: "Shopping",
      title: "Buy groceries",
      description: "Get milk, bread, and eggs from the store",
      date: "2024-07-18",
    },
    {
      id: "10",
      category: "Hobbies",
      title: "Read a book",
      description: "Finish reading the current book",
      date: "2024-07-21",
    },
  ],
  reducers: {},
});

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
