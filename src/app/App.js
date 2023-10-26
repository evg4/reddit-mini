import styles from "./App.module.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Subreddits from "../components/Subreddits";
import Feed from "../features/feed/Feed";
import Footer from "../components/Footer";
import React from "react";
import { changeView } from "../features/feed/feedSlice";
import reddit from "../data/redditApi";

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
    //code here
  };

  return (
    <div>
      <header>
        <Header />
        <SearchBar />
      </header>
      <main>
        <Feed state={state} dispatch={dispatch} changeFeed={changeFeed} />
        <Subreddits />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
