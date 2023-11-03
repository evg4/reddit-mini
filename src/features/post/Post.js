import styles from "../post/Post.module.css";
import { useEffect } from "react";
import { fetchPostThunk } from "./postSlice";
import { fetchResultsThunk } from "../results/resultsSlice";
import { changeView } from "../feed/feedSlice";
import ReactMarkdown from "react-markdown";
import pen from "../../assets/pen.png";
import calendar from "../../assets/calendar.png";

function Post(props) {
  const dispatch = props.dispatch;
  const term = props.state.searchTerm;
  useEffect(() => {
    dispatch(fetchPostThunk(term));
  }, []);

  const goToSubreddit = (e) => {
    const term = e.target.innerHTML.slice(2);
    dispatch(changeView("showResults"));
    dispatch(fetchResultsThunk(term));
  };

  let fullDate;
  if (props.state.post.post[0]) {
    let timestamp =
      props.state.post.post[0].data.children[0].data.created_utc * 1000;
    let date = new Date(timestamp);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    fullDate = `${day}-${month}-${year}`;
  }

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
          <ReactMarkdown className={styles.postText} children={post.selftext} />
          <img className={styles.postImg} src={post.url}></img>
          <div className={styles.author}>
            <img className={styles.icon} src={pen}></img>
            <p>{post.author} </p>
            <img className={styles.icon} src={calendar}></img>
            <p> {fullDate}</p>
          </div>
        </div>
        <ul className={styles.ul}>
          {commentsArr.map((comment) => {
            return (
              <li className={styles.comment} key={comment.data.id}>
                <ReactMarkdown
                  className={styles.commentText}
                  children={comment.data.body}
                />
                <div className={styles.author}>
                  <img className={styles.icon} src={pen}></img>
                  <p>{comment.data.author} </p>
                  <img className={styles.icon} src={calendar}></img>
                  <p> {fullDate}</p>
                </div>
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
          <ReactMarkdown className={styles.postText} children={post.selftext} />
          <img className={styles.postImg} src={post.thumbnail}></img>
          <div className={styles.author}>
            <img className={styles.icon} src={pen}></img>
            <p>{post.author} </p>
            <img className={styles.icon} src={calendar}></img>
            <p> {fullDate}</p>
          </div>
        </div>
        <ul className={styles.ul}>
          {commentsArr.map((comment) => {
            return (
              <li className={styles.comment} key={comment.data.id}>
                <ReactMarkdown
                  className={styles.commentText}
                  children={comment.data.body}
                />
                <div className={styles.author}>
                  <img className={styles.icon} src={pen}></img>
                  <p>{comment.data.author} </p>
                  <img className={styles.icon} src={calendar}></img>
                  <p> {fullDate}</p>
                </div>
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
          <ReactMarkdown className={styles.postText} children={post.selftext} />

          <video
            className={styles.postVid}
            controls
            src={post.media.reddit_video.fallback_url}
          >
            Video not supported.
          </video>
          <div className={styles.author}>
            <img className={styles.icon} src={pen}></img>
            <p>{post.author} </p>
            <img className={styles.icon} src={calendar}></img>
            <p> {fullDate}</p>
          </div>
        </div>
        <ul className={styles.ul}>
          {commentsArr.map((comment) => {
            return (
              <li className={styles.comment} key={comment.data.id}>
                <ReactMarkdown
                  className={styles.commentText}
                  children={comment.data.body}
                />
                <div className={styles.author}>
                  <img className={styles.icon} src={pen}></img>
                  <p>{comment.data.author} </p>
                  <img className={styles.icon} src={calendar}></img>
                  <p> {fullDate}</p>
                </div>
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
          <ReactMarkdown className={styles.postText} children={post.selftext} />
          <div className={styles.author}>
            <img className={styles.icon} src={pen}></img>
            <p>{post.author} </p>
            <img className={styles.icon} src={calendar}></img>
            <p> {fullDate}</p>
          </div>
        </div>
        <ul className={styles.ul}>
          {commentsArr.map((comment) => {
            return (
              <li className={styles.comment} key={comment.data.id}>
                <ReactMarkdown
                  className={styles.commentText}
                  children={comment.data.body}
                />
                <div className={styles.author}>
                  <img className={styles.icon} src={pen}></img>
                  <p>{comment.data.author} </p>
                  <img className={styles.icon} src={calendar}></img>
                  <p> {fullDate}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Post;
