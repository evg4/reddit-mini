import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "results",
  initialState: [], //initial state is /popular
  reducers: {
    changeResults: (state, action) => {
      //check this! just copied from feedSlice so far
      state = action.payload;
      return state;
    },
  },
};

const resultsSlice = createSlice(options);
export const { changeResults } = resultsSlice.actions;
export default resultsSlice.reducer;
