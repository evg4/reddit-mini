import styles from "../components/PostPreview.module.css";
import { fetchResultsThunk } from "../features/results/resultsSlice";
import { fetchPostThunk } from "../features/post/postSlice";
import { changeView } from "../features/feed/feedSlice";
import { changeTerm } from "../features/searchTerm/searchTermSlice";

function PostPreview(props) {
  const dispatch = props.dispatch;

  const getPost = (e) => {
    const rawTerm = e.target.getAttribute("value");
    const term = rawTerm.slice(3, -1);
    dispatch(changeView("showPost"));
    dispatch(changeTerm(term));
  };

  if (props.url.includes(".jpg") || props.url.includes(".jpeg")) {
    return (
      <div className={styles.preview}>
        <h3>{props.title}</h3>
        <p>{props.subreddit}</p>
        <img className={styles.imgUrl} src={props.url}></img>
        <p>{props.selftext}</p>
        <p className={styles.link} value={props.permalink} onClick={getPost}>
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
        <p className={styles.link} value={props.permalink} onClick={getPost}>
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
        <p className={styles.link} value={props.permalink} onClick={getPost}>
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
        <p className={styles.link} value={props.permalink} onClick={getPost}>
          See more
        </p>
      </div>
    );
  }
}

export default PostPreview;
