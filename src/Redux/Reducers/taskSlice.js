import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    ADD_TASK(state, action) {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      return [...state, newTask];
    },
    TOGGLE_TASK(state, action) {
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },
  },
});

export const { ADD_TASK, TOGGLE_TASK } = taskSlice.actions;
export default taskSlice.reducer;
