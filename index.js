const express = require("express");
const mongoose = require("mongoose");
const AppRouter = require("./router/router");
const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/guestara")
  .then(() => console.log("connected to db"));

AppRouter(app);

app.listen(10000);
