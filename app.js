const express = require("express");
const app = express();
require("dotenv").config();

const tasksRouter = require("./Router/tasks");

const connectToDB = require("./connectdb");
const testData = require("./data/test.json");

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//connection to mongoDb
connectToDB();

//routers

app.use("/api/tasks", tasksRouter);
app.use("/api/test", (req, res) => {
  res.send({ testData });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
