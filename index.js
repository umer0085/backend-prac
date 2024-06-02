const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(process.env.PORT);
