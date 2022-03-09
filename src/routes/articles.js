const axios = require("axios");
const capitalize = require("../helpers/capitalize");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const { search } = req.query;
  var url = "https://es.wikipedia.org/w/api.php";

  var params = {
    action: "query",
    list: "search",
    srsearch: search,
    format: "json",
  };

  url = url + "?origin=*";
  Object.keys(params).forEach((key) => {
    url += "&" + key + "=" + params[key];
  });

  const { data } = await axios.get(url);
  res.json(data);
});

router.get("/new", async (req, res) => {
  let { page } = req.query;
  page = escape(page);
  try {
    page = page.split(" ").map(capitalize);
    page = page.join("_");
    const { data } = await axios.get(
      `https://es.wikipedia.org/w/api.php?action=parse&page=${page}&prop=wikitext&formatversion=2&format=json`
    );
    let ps = data.parse.wikitext.split("\n");
    res.json({ ps });
  } catch (error) {
    throw error;
    // res.json({ error: error.message });
  }
});
module.exports = router;
