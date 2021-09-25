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

router.get("/read", readUser);

router.get("/:employeeId", readUserById);

router.put("/:employeeId", updateUser);

router.delete("/:employeeId", deleteUser);

module.exports = router;
