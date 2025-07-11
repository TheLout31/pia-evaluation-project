import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Reducers/taskSlice";
import blogReducer from "./Reducers/blogsSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    blogs: blogReducer
  },
});
