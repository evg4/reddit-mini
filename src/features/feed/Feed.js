import styles from "./Feed.module.css";
import Post from "../post/Post";
import Results from "../results/Results";

function Feed(props) {
  if (props.state.feed === "showResults") {
    return (
      <section className={styles.section}>
        <Results state={props.state} dispatch={props.dispatch} />
      </section>
    );
  } else {
    return (
      <section className={styles.section}>
        <Post state={props.state} dispatch={props.dispatch} />
      </section>
    );
  }
}

export default Feed;
