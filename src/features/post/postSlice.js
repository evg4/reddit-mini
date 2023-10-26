import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "post",
  initialState: [],
  reducers: {
    changePost: (state, action) => {
      //check this!! just copied from feedSlice so far
      state = action.payload;
      return state;
    },
  },
};

const postSlice = createSlice(options);
export const { changePost } = postSlice.actions;
export default postSlice.reducer;
