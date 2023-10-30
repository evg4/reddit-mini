import styles from "../components/PostPreview.module.css";

function PostPreview(props) {
  return (
    <div className={styles.preview}>
      <h3>{props.title}</h3>
      <p>r/{props.subreddit}</p>
      <p>See more</p>
    </div>
  );
}

export default PostPreview;
