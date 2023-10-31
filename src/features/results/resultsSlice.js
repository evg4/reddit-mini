import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchResults } from "../../data/redditApi";
import { fetchSearchResults } from "../../data/redditApi";

const fetchResultsThunk = createAsyncThunk(
  "results/fetchResults",
  async (term, thunkAPI) => {
    const response = await fetchResults(term);
    return response;
  }
);

const fetchSearchResultsThunk = createAsyncThunk(
  "results/fetchSearchResults",
  async (term, thunkAPI) => {
    const response = await fetchSearchResults(term);
    return response;
  }
);

const options = {
  name: "results",
  initialState: { results: {}, isLoading: false, hasError: true },
  reducers: {},
  extraReducers: {
    [fetchResultsThunk.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchResultsThunk.fulfilled]: (state, action) => {
      state.results = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchResultsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [fetchSearchResultsThunk.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchSearchResultsThunk.fulfilled]: (state, action) => {
      state.results = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchSearchResultsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

const resultsSlice = createSlice(options);
//export const { changeResults } = resultsSlice.actions;
export { fetchResultsThunk };
export { fetchSearchResultsThunk };
export default resultsSlice.reducer;
