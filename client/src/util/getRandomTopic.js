import axios from "axios";

// Asynchronous helper method that gets an array of Trending topics on Twitter
async function getTwitterTrending() {
  try {
    const res = await axios.get("/api/trending-topics");

    const topics = res.data[0].trends;
    return topics;
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Fetches list of Trending Topics from Twitter API and returns a random one
export async function getRandomTopic() {
  try {
    const topics = await getTwitterTrending();
    return topics[Math.floor(Math.random() * topics.length)];
  } catch (err) {
    console.error(err);
    return {};
  }
}
