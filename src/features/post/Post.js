import styles from "../post/Post.module.css";
import { useEffect } from "react";
import { fetchPostThunk } from "./postSlice";

function Post(props) {
  const dispatch = props.dispatch;
  const term = props.state.searchTerm;
  useEffect(() => {
    dispatch(fetchPostThunk(term));
  }, []);

  if (props.state.post.isLoading) {
    return <p>Loading...</p>;
  } else if (props.state.post.hasError) {
    return <p>There was an error. Please try again.</p>;
  } else {
    const post = props.state.post.post[0].data.children[0].data;
    const commentsArr = props.state.post.post[1].data.children;
    return (
      <div>
        <div className={styles.post}>
          <h3>{post.title}</h3>
          <p>{post.subreddit_name_prefixed}</p>
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
