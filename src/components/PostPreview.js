import styles from "../components/PostPreview.module.css";
import { fetchResultsThunk } from "../features/results/resultsSlice";
import { changeView } from "../features/feed/feedSlice";

function PostPreview(props) {
  const dispatch = props.dispatch;

  const getPost = (e) => {
    const rawTerm = e.target.getAttribute("value");
    const term = rawTerm.slice(3, -1);
    console.log(term);
    dispatch(changeView("showPost"));
    dispatch(fetchResultsThunk(term));
  };

  if (props.url.includes(".jpg") || props.url.includes(".jpeg")) {
    return (
      <div className={styles.preview}>
        <h3>{props.title}</h3>
        <p>{props.subreddit}</p>
        <img className={styles.imgUrl} src={props.url}></img>
        <p>{props.selftext}</p>
        <p value={props.permalink} onClick={getPost}>
          See more
        </p>
      </div>
    );
  } else if (props.thumbnail.includes(".jpg")) {
    return (
      <div className={styles.preview}>
        <h3>{props.title}</h3>
        <p>{props.subreddit}</p>
        <img className={styles.imgTh} src={props.thumbnail}></img>
        <p>{props.selftext}</p>
        <p value={props.permalink} onClick={getPost}>
          See more
        </p>
      </div>
    );
  } else if (props.video) {
    return (
      <div className={styles.preview}>
        <h3>{props.title}</h3>
        <p>{props.subreddit}</p>
        <p>{props.selftext}</p>
        <video className={styles.vid} src={props.video} controls>
          Video not supported.
        </video>
        <p value={props.permalink} onClick={getPost}>
          See more
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.preview}>
        <h3>{props.title}</h3>
        <p>{props.subreddit}</p>
        <p>{props.selftext}</p>
        <p value={props.permalink} onClick={getPost}>
          See more
        </p>
      </div>
    );
  }
}

export default PostPreview;
