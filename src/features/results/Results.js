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
    //console.log(jsonResponse);
    const array = props.state.results.results.data.children;

    return (
      <>
        {array.map((item) => {
          return (
            <PostPreview
              key={item.data.id}
              title={item.data.title}
              subreddit={item.data.subreddit}
            />
          );
        })}
      </>
    );
  }
}

export default Results;
