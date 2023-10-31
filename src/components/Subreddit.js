import styles from "./Subreddit.module.css";
import { fetchResultsThunk } from "../features/results/resultsSlice";
import { changeView } from "../features/feed/feedSlice";

function Subreddit(props) {
  const dispatch = props.dispatch;
  const getResults = (e) => {
    const term = e.target.innerHTML;
    dispatch(changeView("showResults"));
    dispatch(fetchResultsThunk(term));
  };
  return (
    <div className={styles.container}>
      <img src={props.img}></img>
      <p onClick={getResults} className={styles.link} name={props.name}>
        {props.name}
      </p>
    </div>
  );
}

export default Subreddit;
