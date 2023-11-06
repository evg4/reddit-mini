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
    if (props.state.searchTerm === "") {
      e.preventDefault();
    } else {
      e.preventDefault();
      searchBox.value = "";
      const term = props.state.searchTerm;
      dispatch(changeView("showResults"));
      dispatch(fetchSearchResultsThunk(term));
      dispatch(changeTerm(""));
    }
  };

  const handleDelete = (e) => {
    searchBox.value = "";
    dispatch(changeTerm(""));
  };

  return (
    <div className={styles.containerDiv}>
      <form
        className={styles.fix}
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <button>
          <img className={styles.search} src={searchIcon}></img>
        </button>
        <input id="value" placeholder="Enter search term"></input>
        <sup onClick={handleDelete} className={styles.x}>
          x
        </sup>
      </form>
    </div>
  );
}

export default SearchBar;
