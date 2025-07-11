import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk("Reducers/fetchBlogs", async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state, state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        // Add user to the state array
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state, (state.loading = false);
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
