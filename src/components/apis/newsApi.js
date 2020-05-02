const axios = require("axios");

export default axios.create({
  baseURL: "http://newsapi.org/v2",
});
