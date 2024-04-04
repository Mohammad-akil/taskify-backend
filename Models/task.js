const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: String,
      enum: ["completed", "pending"],
      default: "pending",
    },
    id: {
      type: String,
      required: false,
      default: uuidv4,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
