import { useEffect } from "react";
import { fetchResultsThunk } from "./resultsSlice";
import PostPreview from "../../components/PostPreview";

function Results(props) {
  const dispatch = props.dispatch;
  useEffect(() => {
    if (props.state.results.results.kind === undefined) {
      dispatch(fetchResultsThunk("popular"));
    }
  }, []);

  if (props.state.results.isLoading === true) {
    return <p>Loading...</p>;
  } else if (props.state.results.hasError === true) {
    return <p>There was an error. Please try again.</p>;
  } else if (props.state.results.results === undefined) {
    return <p>Rate limit reached. Please try again in 1 minute.</p>;
  } else {
    const array = props.state.results.results.data.children.slice(2);

    return (
      <>
        {array.map((item) => {
          let video;
          if (item.data.is_video === true) {
            video = item.data.media.reddit_video.fallback_url;
          } else {
            video = "";
          }

          let timestamp = item.data.created_utc * 1000;
          let date = new Date(timestamp);
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          let fullDate = `${day}-${month}-${year}`;

          return (
            <PostPreview
              key={item.data.id}
              title={item.data.title}
              subreddit={item.data.subreddit}
              thumbnail={item.data.thumbnail}
              url={item.data.url}
              permalink={item.data.permalink}
              selftext={item.data.selftext}
              video={video}
              author={item.data.author}
              ups={item.data.ups}
              downs={item.data.downs}
              date={fullDate}
              dispatch={props.dispatch}
              state={props.state}
            />
          );
        })}
      </>
    );
  }
}

export default Results;
