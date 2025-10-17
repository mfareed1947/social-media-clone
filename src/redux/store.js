import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/slice/postSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
