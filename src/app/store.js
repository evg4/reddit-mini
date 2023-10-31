import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../features/feed/feedSlice";
import resultsReducer from "../features/results/resultsSlice";
import postReducer from "../features/post/postSlice";
import searchTermReducer from "../features/searchTerm/searchTermSlice";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    results: resultsReducer,
    post: postReducer,
    searchTerm: searchTermReducer,
  },
});
