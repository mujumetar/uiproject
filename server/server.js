const express = require("express");
const app = express();
const port = 3000;
const data = require("../server/data.json");
const path = require("path");
const db = require("./config/db");
const cors = require("cors")

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cors());
app.use("/", require("./routes/admin-routes"));
app.use(express.static(path.join(__dirname, "/public")));

app.listen(port, (err) => {
  if (err) {
    console.log("server is not connected...!");
    return false;
  }
  console.log("connected to the port " + port);
});
