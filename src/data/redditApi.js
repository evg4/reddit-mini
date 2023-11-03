export const fetchResults = async (term) => {
  const base = "https://www.reddit.com/r/";
  const url = base + term + ".json";
  try {
    const data = await fetch(url);
    if (data.ok) {
      const jsonResponse = await data.json();
      return jsonResponse;
      //code to execute with jsonResponse
    } else {
      throw new Error("Request failed.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchResults = async (term) => {
  let newTerm = term.replace(" ", "%20");
  const base = "https://www.reddit.com/search.json?q=";
  const url = base + term;
  try {
    const data = await fetch(url);
    if (data.ok) {
      const jsonResponse = await data.json();
      return jsonResponse;
      //code to execute with jsonResponse
    } else {
      throw new Error("Request failed.");
    }
  } catch (error) {
    console.log(error);
  }
};
