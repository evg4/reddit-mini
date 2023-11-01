import styles from "./SearchBar.module.css";
import searchIcon from "../assets/search-icon2.png";
import { changeTerm } from "../features/searchTerm/searchTermSlice";
import { changeView } from "../features/feed/feedSlice";
import { fetchSearchResultsThunk } from "../features/results/resultsSlice";

function SearchBar(props) {
  const searchBox = document.querySelector("#value");
  const dispatch = props.dispatch;

  const handleChange = (e) => {
    const term = e.target.value;
    dispatch(changeTerm(term));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchBox.value = "";
    const term = props.state.searchTerm;
    dispatch(changeView("showResults"));
    dispatch(fetchSearchResultsThunk(term));
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <input id="value" placeholder="Enter search term"></input>
      <button>
        <img className={styles.search} src={searchIcon}></img>
      </button>
    </form>
  );
}

export default SearchBar;
