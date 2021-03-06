const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();
var cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

mongoose.connect(
  process.env.MONGO_URI
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb connected");
});

//middleware
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);
const profileRoute = require("./routes/profile");
app.use("/profile", profileRoute);
const blogRoute = require("./routes/blogpost");
app.use("/blogPost", blogRoute);

data = {
  msg: "",
  info: "This is a root endpoint",
  Working: "",
  request: "",
};

app.route("/").get((req, res) => res.json(data));

app.listen(port, () => console.log(`welcome your listinnig at port ${port}`));
