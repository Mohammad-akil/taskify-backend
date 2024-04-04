const Users = require("../Models/user");

const getAllUsers = async (req, res) => {
  const users = await Users.find({});
  res.status(200).json(users);
};

const getuserById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (!id) {
    res.status(400).json({ message: "id is required" });
    return;
  }
  const user = await Users.findById(req.params.id);
  res.status(200).json(user);
};

const createNewUser = async (req, res) => {
  const name = req.body.name;
  if (!name) {
    res.status(400).json({ message: "Name is required" });
    return;
  }
  const user = new Users({
    name: req.body.name,
  });
  const newUser = await user.save();
  res.status(201).json({ message: "User created successfully", data: newUser });
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({ message: "id is required" });
    return;
  }
  const name = req.body.name;
  if (!name) {
    res.status(400).json({ message: "name is required" });
    return;
  }
  await Users.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  const user = await Users.findById(req.params.id);
  res.status(200).json({ message: "User updated successfully", data: user });
};

const deleteuser = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({ message: "id is required" });
    return;
  }
  await Users.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  getAllUsers,
  getuserById,
  createNewUser,
  updateUser,
  deleteuser,
};
