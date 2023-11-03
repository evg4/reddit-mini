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

  const goToSubreddit = (e) => {
    const term = e.target.innerHTML.slice(2);
    dispatch(changeView("showResults"));
    dispatch(fetchResultsThunk(term));
  };

  if (props.url.includes(".jpg") || props.url.includes(".jpeg")) {
    return (
      <div value={props.permalink} onClick={getPost} className={styles.preview}>
        <h3 value={props.permalink}>{props.title}</h3>
        <p className={styles.subreddit} onClick={goToSubreddit}>
          r/{props.subreddit}
        </p>
        <img className={styles.imgUrl} src={props.url}></img>
        <p>{props.selftext}</p>
        <p className={styles.info}>
          Posted by {props.author} on {props.date}
        </p>
      </div>
    );
  } else if (props.thumbnail.includes(".jpg")) {
    return (
      <div value={props.permalink} onClick={getPost} className={styles.preview}>
        <h3 value={props.permalink}>{props.title}</h3>
        <p className={styles.subreddit} onClick={goToSubreddit}>
          r/{props.subreddit}
        </p>
        <img className={styles.imgTh} src={props.thumbnail}></img>
        <p>{props.selftext}</p>
        <p className={styles.info}>
          Posted by {props.author} on {props.date}
        </p>
      </div>
    );
  } else if (props.video) {
    return (
      <div value={props.permalink} onClick={getPost} className={styles.preview}>
        <h3 value={props.permalink}>{props.title}</h3>
        <p className={styles.subreddit} onClick={goToSubreddit}>
          r/{props.subreddit}
        </p>
        <p>{props.selftext}</p>
        <video className={styles.vid} src={props.video} controls>
          Video not supported.
        </video>
        <p className={styles.info}>
          Posted by {props.author} on {props.date}
        </p>
      </div>
    );
  } else {
    return (
      <div value={props.permalink} onClick={getPost} className={styles.preview}>
        <h3 value={props.permalink}>{props.title}</h3>
        <div value={props.permalink} className={styles.flex}>
          <p className={styles.subreddit} onClick={goToSubreddit}>
            r/{props.subreddit}
          </p>
          <p value={props.permalink} className={styles.info}>
            Posted by {props.author} on {props.date}
          </p>{" "}
        </div>
      </div>
    );
  }
}

export default PostPreview;
