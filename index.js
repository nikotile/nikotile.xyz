const express = require("express");
const pug = require('pug');

const app = express();

app.get("/", (req, res) => {
  res.render("index", { title: "Nikotile" });
});

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
