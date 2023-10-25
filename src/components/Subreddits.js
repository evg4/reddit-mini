import styles from "./Subreddits.module.css";
import Subreddit from "./Subreddit";
import { subreddits } from "../data/subredditInfo";

function Subreddits() {
  return (
    <section className={styles.section}>
      <h2>Subreddits</h2>
      {subreddits.map((item) => {
        return <Subreddit name={item.name} img={item.img} url={item.url} />;
      })}
    </section>
  );
}

export default Subreddits;
