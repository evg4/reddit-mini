import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchResults } from "../../data/redditApi";

const fetchResultsThunk = createAsyncThunk(
  "results/fetchResults",
  async (term, thunkAPI) => {
    const response = await fetchResults(term);
    //console.log(response);
    return response;
    //const jsonResponse = await response.json();
    //console.log(jsonResponse);
    //return jsonResponse;
  }
);

const options = {
  name: "results",
  initialState: { results: {}, isLoading: false, hasError: true }, //initial state is /popular
  reducers: {},
  extraReducers: {
    [fetchResultsThunk.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchResultsThunk.fulfilled]: (state, action) => {
      state.results = action.payload; //.payload is "popular"
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchResultsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

const resultsSlice = createSlice(options);
//export const { changeResults } = resultsSlice.actions;
export { fetchResultsThunk };
export default resultsSlice.reducer;
