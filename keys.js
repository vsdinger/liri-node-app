console.log('this is loaded');
require("dotenv").config()
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
exports.omdb={
  key: process.env.omdb_API_KEY
}

var spotify = new Spotify(keys.spotify);