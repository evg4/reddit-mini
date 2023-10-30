import styles from "../components/PostPreview.module.css";

function PostPreview(props) {
  if (props.url.includes(".jpg") || props.url.includes(".jpeg")) {
    return (
      <div className={styles.preview}>
        <h3>{props.title}</h3>
        <p>{props.subreddit}</p>
        <img className={styles.imgUrl} src={props.url}></img>
        <p>{props.selftext}</p>
        <p>
          <a target="_blank" href={props.url}>
            See more
          </a>
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
        <p>
          <a target="_blank" href={props.url}>
            See more
          </a>
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
        <p>
          <a target="_blank" href={props.url}>
            See more
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.preview}>
        <h3>{props.title}</h3>
        <p>{props.subreddit}</p>
        <p>{props.selftext}</p>
        <p>
          <a target="_blank" href={props.url}>
            See more
          </a>
        </p>
      </div>
    );
  }
}

export default PostPreview;
