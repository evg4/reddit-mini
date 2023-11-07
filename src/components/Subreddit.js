import styles from "./Subreddit.module.css";
import { fetchResultsThunk } from "../features/results/resultsSlice";
import { changeView } from "../features/feed/feedSlice";

function Subreddit(props) {
  const dispatch = props.dispatch;
  const getResults = (e) => {
    const term = e.target.getAttribute("name");
    dispatch(changeView("showResults"));
    dispatch(fetchResultsThunk(term));
  };
  return (
    <div onClick={getResults} name={props.name} className={styles.container}>
      <img alt={props.name} name={props.name} src={props.img}></img>
      <p name={props.name}>{props.name}</p>
    </div>
  );
}

export default Subreddit;
