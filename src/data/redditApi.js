const fetchResults = async (term) => {
  const base = "https://www.reddit.com/r/";
  const url = base + term + ".json";
  console.log(url);
  try {
    const data = await fetch(url);
    if (data.ok) {
      const jsonResponse = await data.json();
      return jsonResponse;
      //console.log(jsonResponse.data.children[1].data.title);
      //code to execute with jsonResponse
    } else {
      throw new Error("Request failed.");
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchResults };
