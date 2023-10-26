const reddit = {
  async fetchResults(term) {
    const base = "https://www.reddit.com/r/";
    const url = base + term;
    try {
      const data = await fetch(url);
      if (data.ok) {
        const jsonResponse = await data.json();
        console.log(jsonResponse);
        //code to execute with jsonResponse
      }
      throw new Error("Request failed.");
    } catch (error) {
      console.log(error);
    }
  },
  async fetchPost() {},
};

export default reddit;
