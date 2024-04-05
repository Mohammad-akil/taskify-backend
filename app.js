const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const tasksRouter = require("./Router/tasks");

const connectToDB = require("./connectdb");

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
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);

//connection to mongoDb
connectToDB();

//routers

app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
