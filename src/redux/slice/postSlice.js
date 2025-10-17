import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      console.log(state.post.push(action.payload), "state.post");
    },
    deletePost: (state, action) => {
      const { id } = action.payload;
      console.log(id);

      const data = state.post.filter((currPost) => currPost.id !== id);
      state.post = data;
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
