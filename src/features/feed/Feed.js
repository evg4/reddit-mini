import styles from "./Feed.module.css";
import Post from "../post/Post";
import Results from "../results/Results";

function Feed(props) {
  if (props.state.feed === "showResults") {
    return (
      <section className={styles.section}>
        <button onClick={props.changeFeed}>Test button (change feed)</button>
        <Results />
      </section>
    );
  } else {
    return (
      <section className={styles.section}>
        <button onClick={props.changeFeed}>Test button (change feed)</button>
        <Post />
      </section>
    );
  }
}

export default Feed;
