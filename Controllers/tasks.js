const Task = require("../Models/task");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
};

const createNewTask = async (req, res) => {
  const data = req.body;

  try {
    const newTask = new Task(data);
    const user = await newTask.save();
    res.status(201).json({
      success: true,
      message: "task created successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const deleteTask = async (req, res) => {
  const id = String(req.params.id);
  // console.log("Deleted task id: " + id);
  try {
    const user = await Task.find({ id: id });
    if (user.length === 0) {
      console.log("task not found");
      res.status(422).json({
        success: false,
        error: "task not fund",
      });
      return;
    }

    await Task.deleteOne({ id: id });
    res
      .status(200)
      .json({ success: true, message: "task deleted successfully" });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const getTaskById = async (req, res) => {
  const id = String(req.params.id);
  try {
    const task = await Task.find({ id: id });

    if (task.length === 0) {
      res.status(422).json({ success: false, error: "task not fund" });
      return;
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const updateTask = async (req, res) => {
  const id = String(req.params.id);
  const data = req.body;

  try {
    const task = await Task.find({ id: id });
    if (task.length === 0) {
      res.status(422).json({ success: false, error: "task not found" });
      return;
    }
    const updatedTask = await Task.findOneAndUpdate(
      { id: id },
      { title: data.title, completed: data.completed },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  deleteTask,
  getTaskById,
  updateTask,
};
