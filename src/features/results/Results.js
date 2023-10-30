import { useEffect } from "react";
import { fetchResultsThunk } from "./resultsSlice";
import PostPreview from "../../components/PostPreview";

function Results(props) {
  //console.log(props.state.results);
  const dispatch = props.dispatch;
  useEffect(() => {
    dispatch(fetchResultsThunk("popular"));
  }, []);
  //console.log(props.state.results.isLoading);
  if (props.state.results.isLoading === true) {
    return <p>Loading...</p>;
  } else if (props.state.results.hasError === true) {
    return <p>There was an error. Please try again.</p>;
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
          return (
            <PostPreview
              key={item.data.id}
              title={item.data.title}
              subreddit={item.data.subreddit_name_prefixed}
              thumbnail={item.data.thumbnail}
              url={item.data.url}
              selftext={item.data.selftext}
              video={video}
            />
          );
        })}
      </>
    );
  }
}

export default Results;
