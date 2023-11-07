import styles from "./Subreddits.module.css";
import Subreddit from "./Subreddit";
import { subreddits } from "../data/subredditInfo";

function Subreddits(props) {
  return (
    <section className={styles.section}>
      {subreddits.map((item) => {
        return (
          <Subreddit
            key={item.name}
            name={item.name}
            img={item.img}
            url={item.url}
            dispatch={props.dispatch}
          />
        );
      })}
    </section>
  );
}

export default Subreddits;
