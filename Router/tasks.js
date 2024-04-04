const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createNewTask,
  deleteTask,
  getTaskById,
  updateTask,
} = require("../Controllers/tasks");

router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").delete(deleteTask).get(getTaskById).patch(updateTask);

module.exports = router;
