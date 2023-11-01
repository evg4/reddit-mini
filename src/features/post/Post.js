import styles from "../post/Post.module.css";
import { useEffect } from "react";
import { fetchPostThunk } from "./postSlice";
import { fetchResultsThunk } from "../results/resultsSlice";
import { changeView } from "../feed/feedSlice";

function Post(props) {
  const dispatch = props.dispatch;
  const term = props.state.searchTerm;
  useEffect(() => {
    dispatch(fetchPostThunk(term));
  }, []);

  const goToSubreddit = (e) => {
    const term = e.target.innerHTML.slice(2);
    console.log(term);
    dispatch(changeView("showResults"));
    dispatch(fetchResultsThunk(term));
  };

  if (props.state.post.isLoading) {
    return <p>Loading...</p>;
  } else if (props.state.post.hasError) {
    return <p>There was an error. Please try again.</p>;
  } else if (
    props.state.post.post[0].data.children[0].data.url.includes(".jpg") ||
    props.state.post.post[0].data.children[0].data.url.includes(".jpeg")
  ) {
    const post = props.state.post.post[0].data.children[0].data;
    const commentsArr = props.state.post.post[1].data.children;
    return (
      <div>
        <div className={styles.post}>
          <h3>{post.title}</h3>
          <p className={styles.link} onClick={goToSubreddit}>
            {post.subreddit_name_prefixed}
          </p>
          <p>{post.selftext}</p>
          <img src={post.url}></img>
        </div>
        <ul className={styles.ul}>
          {commentsArr.map((comment) => {
            return (
              <li className={styles.comment} key={comment.data.id}>
                {comment.data.body}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (
    props.state.post.post[0].data.children[0].data.thumbnail.includes(".jpg")
  ) {
    const post = props.state.post.post[0].data.children[0].data;
    const commentsArr = props.state.post.post[1].data.children;
    return (
      <div>
        <div className={styles.post}>
          <h3>{post.title}</h3>
          <p className={styles.link} onClick={goToSubreddit}>
            {post.subreddit_name_prefixed}
          </p>
          <p>{post.selftext}</p>
          <img src={post.thumbnail}></img>
        </div>
        <ul className={styles.ul}>
          {commentsArr.map((comment) => {
            return (
              <li className={styles.comment} key={comment.data.id}>
                {comment.data.body}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (props.state.post.post[0].data.children[0].data.is_video) {
    const post = props.state.post.post[0].data.children[0].data;
    const commentsArr = props.state.post.post[1].data.children;
    return (
      <div>
        <div className={styles.post}>
          <h3>{post.title}</h3>
          <p className={styles.link} onClick={goToSubreddit}>
            {post.subreddit_name_prefixed}
          </p>
          <p>{post.selftext}</p>
          <video controls src={post.media.reddit_video.fallback_url}>
            Video not supported.
          </video>
        </div>
        <ul className={styles.ul}>
          {commentsArr.map((comment) => {
            return (
              <li className={styles.comment} key={comment.data.id}>
                {comment.data.body}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    const post = props.state.post.post[0].data.children[0].data;
    const commentsArr = props.state.post.post[1].data.children;
    return (
      <div>
        <div className={styles.post}>
          <h3>{post.title}</h3>
          <p className={styles.link} onClick={goToSubreddit}>
            {post.subreddit_name_prefixed}
          </p>
          <p>{post.selftext}</p>
        </div>
        <ul className={styles.ul}>
          {commentsArr.map((comment) => {
            return (
              <li className={styles.comment} key={comment.data.id}>
                {comment.data.body}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Post;
