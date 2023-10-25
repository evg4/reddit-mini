import styles from "./Subreddit.module.css";

function Subreddit(props) {
  return (
    <div className={styles.container}>
      <img src={props.img}></img>
      <p>{props.name}</p>
    </div>
  );
}

export default Subreddit;
