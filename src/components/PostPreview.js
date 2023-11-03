import styles from "../components/PostPreview.module.css";
import { fetchResultsThunk } from "../features/results/resultsSlice";
import { changeView } from "../features/feed/feedSlice";
import { changeTerm } from "../features/searchTerm/searchTermSlice";
import upsImg from "../assets/ups.png";
import downsImg from "../assets/downs.png";
import comments from "../assets/comments.png";
import pen from "../assets/pen.png";
import calendar from "../assets/calendar.png";

function PostPreview(props) {
  const dispatch = props.dispatch;

  const getPost = (e) => {
    if (e.target.getAttribute("value") !== "subreddit") {
      const rawTerm = e.target.getAttribute("value");
      const term = rawTerm.slice(3, -1);
      dispatch(changeView("showPost"));
      dispatch(changeTerm(term));
    }
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
        <p
          value="subreddit"
          className={styles.subreddit}
          onClick={goToSubreddit}
        >
          r/{props.subreddit}
        </p>
        <img
          value={props.permalink}
          className={styles.imgUrl}
          src={props.url}
        ></img>
        <div value={props.permalink} className={styles.info}>
          <img
            value={props.permalink}
            className={styles.icon}
            src={upsImg}
          ></img>
          <p value={props.permalink}>{props.score}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={downsImg}
          ></img>
          <img
            value={props.permalink}
            className={styles.icon}
            src={comments}
          ></img>
          <p value={props.permalink}>{props.comments}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={pen}
          ></img>{" "}
          <p value={props.permalink}>{props.author}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={calendar}
          ></img>{" "}
          <p value={props.permalink}>{props.date}</p>
        </div>

        <p value={props.permalink}>{props.selftext}</p>
      </div>
    );
  } else if (props.thumbnail.includes(".jpg")) {
    return (
      <div value={props.permalink} onClick={getPost} className={styles.preview}>
        <h3 value={props.permalink}>{props.title}</h3>
        <p
          value="subreddit"
          className={styles.subreddit}
          onClick={goToSubreddit}
        >
          r/{props.subreddit}
        </p>
        <img
          value={props.permalink}
          className={styles.imgTh}
          src={props.thumbnail}
        ></img>
        <div value={props.permalink} className={styles.info}>
          <img
            value={props.permalink}
            className={styles.icon}
            src={upsImg}
          ></img>
          <p value={props.permalink}>{props.score}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={downsImg}
          ></img>
          <img
            value={props.permalink}
            className={styles.icon}
            src={comments}
          ></img>
          <p value={props.permalink}>{props.comments}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={pen}
          ></img>{" "}
          <p value={props.permalink}>{props.author}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={calendar}
          ></img>{" "}
          <p value={props.permalink}>{props.date}</p>
        </div>
        <p value={props.permalink}>{props.selftext}</p>
      </div>
    );
  } else if (props.video) {
    return (
      <div value={props.permalink} onClick={getPost} className={styles.preview}>
        <h3 value={props.permalink}>{props.title}</h3>
        <p
          value="subreddit"
          className={styles.subreddit}
          onClick={goToSubreddit}
        >
          r/{props.subreddit}
        </p>

        <video
          value={props.permalink}
          className={styles.vid}
          src={props.video}
          controls
        >
          Video not supported.
        </video>
        <div value={props.permalink} className={styles.info}>
          <img
            value={props.permalink}
            className={styles.icon}
            src={upsImg}
          ></img>
          <p value={props.permalink}>{props.score}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={downsImg}
          ></img>
          <img
            value={props.permalink}
            className={styles.icon}
            src={comments}
          ></img>
          <p value={props.permalink}>{props.comments}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={pen}
          ></img>{" "}
          <p value={props.permalink}>{props.author}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={calendar}
          ></img>{" "}
          <p value={props.permalink}>{props.date}</p>
        </div>
        <p value={props.permalink}>{props.selftext}</p>
      </div>
    );
  } else {
    return (
      <div value={props.permalink} onClick={getPost} className={styles.preview}>
        <h3 value={props.permalink}>{props.title}</h3>
        <p
          value="subreddit"
          className={styles.subreddit}
          onClick={goToSubreddit}
        >
          r/{props.subreddit}
        </p>

        <div value={props.permalink} className={styles.info}>
          <img
            value={props.permalink}
            className={styles.icon}
            src={upsImg}
          ></img>
          <p value={props.permalink}>{props.score}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={downsImg}
          ></img>
          <img
            value={props.permalink}
            className={styles.icon}
            src={comments}
          ></img>
          <p value={props.permalink}>{props.comments}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={pen}
          ></img>{" "}
          <p value={props.permalink}>{props.author}</p>
          <img
            value={props.permalink}
            className={styles.icon}
            src={calendar}
          ></img>{" "}
          <p value={props.permalink}>{props.date}</p>
        </div>
      </div>
    );
  }
}

export default PostPreview;
