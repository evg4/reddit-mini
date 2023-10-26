import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "feed",
  initialState: "showResults",
  reducers: {
    changeView: (state, action) => {
      state = action.payload;
      return state;
    },
  },
};

const feedSlice = createSlice(options);
export const { changeView } = feedSlice.actions;
export default feedSlice.reducer;
