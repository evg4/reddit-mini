import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../features/feed/feedSlice";
import resultsReducer from "../features/results/resultsSlice";

export const store = configureStore({
  reducer: { feed: feedReducer, results: resultsReducer },
});
