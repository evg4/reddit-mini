import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchResults } from "../../data/redditApi";

const fetchPostThunk = createAsyncThunk("post/fetchPost", async (term) => {
  const response = await fetchResults(term);
  return response;
});

const options = {
  name: "post",
  initialState: { post: {}, isLoading: false, hasError: true },
  reducers: {},
  extraReducers: {
    [fetchPostThunk.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPostThunk.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

const postSlice = createSlice(options);
//export const { changePost } = postSlice.actions;
export { fetchPostThunk };
export default postSlice.reducer;

/* 
changePost: (state, action) => {
      //check this!! just copied from feedSlice so far
      state = action.payload;
      return state;
    },
*/
