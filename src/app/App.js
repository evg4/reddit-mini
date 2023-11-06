import styles from "./App.module.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Subreddits from "../components/Subreddits";
import Feed from "../features/feed/Feed";
import TopButton from "../components/TopButton";
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

  const goHome = (e) => {
    dispatch(changeView("showResults"));
    dispatch(fetchResultsThunk("popular"));
  };

  return (
    <div className={styles.page}>
      <header>
        <Header onClick={goHome} />
        <SearchBar state={state} dispatch={dispatch} />
      </header>
      <main>
        <Subreddits
          state={state}
          dispatch={dispatch}
          changeResults={changeResults}
        />
        <Feed state={state} dispatch={dispatch} changeFeed={changeFeed} />
        <TopButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
