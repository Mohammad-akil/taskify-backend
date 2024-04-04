const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getuserById,
  createNewUser,
  updateUser,
  deleteuser,
} = require("../Controllers/users");

router.route("/").get(getAllUsers).post(createNewUser);

router.route("/:id").get(getuserById).patch(updateUser).delete(deleteuser);

module.exports = router;
