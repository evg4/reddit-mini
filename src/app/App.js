import styles from "./App.module.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Subreddits from "../components/Subreddits";
import Feed from "../features/feed/Feed";
import Footer from "../components/Footer";
import React from "react";
import { changeView } from "../features/feed/feedSlice";
import { fetchResultsThunk } from "../features/results/resultsSlice";

function App({ state, dispatch }) {
  const changeFeed = (e) => {
    if (state.feed === "showResults") {
      dispatch(changeView("showPost"));
    } else {
      dispatch(changeView("showResults"));
    }
    //console.log(state.feed);
  };

  const changeResults = (e) => {
    dispatch(fetchResultsThunk("popular"));
  };

  return (
    <div>
      <header>
        <Header />
        <SearchBar />
      </header>
      <main>
        <Feed state={state} dispatch={dispatch} changeFeed={changeFeed} />
        <Subreddits changeResults={changeResults} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
