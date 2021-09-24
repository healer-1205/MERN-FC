const express = require("express");
const router = express.Router();
const {
  createUser,
  readUser,
  readUserById,
  updateUser,
  deleteUser,
} = require("../controllers/employees");

router.post("/create", createUser);

router.get("/employee", readUser);

router.get("/employee/:employeeId", readUserById);

router.put("/employee/:employeeId", updateUser);

router.delete("/employee/:employeeId", deleteUser);

module.exports = router;
