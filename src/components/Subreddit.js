import styles from "./Subreddit.module.css";

function Subreddit(props) {
  return (
    <div className={styles.container}>
      <img src={props.img}></img>
      <p className={styles.link}>{props.name}</p>
    </div>
  );
}

export default Subreddit;
