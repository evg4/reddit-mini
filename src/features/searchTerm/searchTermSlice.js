import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "searchTerm",
  initialState: "",
  reducers: {
    changeTerm: (state, action) => {
      state = action.payload;
      return state;
    },
  },
};

const searchTermSlice = createSlice(options);
export const { changeTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
