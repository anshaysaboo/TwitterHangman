const express = require("express");
const cors = require("cors");
const axios = require("axios");

const KEYS = require("./config/keys.js");

const app = express();

app.get("/api/trending-topics", async (req, res) => {
  try {
    const result = await axios.get(
      "https://api.twitter.com/1.1/trends/place.json?id=23424977",
      {
        headers: {
          Authorization: "Bearer " + KEYS.TWITTER_AUTH_TOKEN,
        },
      }
    );

    const topics = result.data;
    res.send(topics);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log("Server running on http://localhost:" + PORT + "/")
);
