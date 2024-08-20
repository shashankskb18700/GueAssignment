const express = require("express");
const mongoose = require("mongoose");
const AppRouter = require("./router/router");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.NODE_APP_API_DATABASE_URL)
  .then(() => console.log("connected to db"));

AppRouter(app);

app.listen(process.env.PORT || 10000);
