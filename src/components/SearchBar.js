import { changeTerm } from "../features/searchTerm/searchTermSlice";
import { fetchSearchResults } from "../data/redditApi";
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
    dispatch(fetchSearchResultsThunk(term));
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <input id="value" placeholder="Enter search term"></input>
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
