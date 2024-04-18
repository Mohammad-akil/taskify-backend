const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const tasksRouter = require("./Router/tasks");

const connectToDB = require("./connectdb");
const data = require("./data/test.json");
const test2data = require("./data/test2.json");

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    origin: "*",
  })
);

//connection to mongoDb
connectToDB();

//routers
app.use("/api/tasks", tasksRouter);

//jayesh endpoints
app.use("/api/test", (req, res) => {
  res.send({ data });
});
app.use("/api/test2", (req, res) => {
  const data = test2data.data;
  res.json({ data });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
