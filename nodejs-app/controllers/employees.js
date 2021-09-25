const Employee = require("../models/Employee");

exports.createUser = async (req, res) => {
  if (!req.body.name || !req.body.gender || !req.body.email || !req.body.job) {
    return res.status(422).json({
      status: 422,
      user: {
        name: "Name is required",
        gender: "Gender is required",
        email: "Email is required",
        job: "Job is required",
      },
    });
  }
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(201).json({
      status: 201,
      message: "Create successfully",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send({
        status: 409,
        message: "Email already exists",
      });
    } else {
      res.status(500).send({
        status: 500,
        message: `Something wen't wrong`,
      });
    }
  }
};

exports.readUser = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).send({
      status: 200,
      response: employee,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};

exports.readUserById = async (req, res) => {
  const id = req.params.employeeId;
  try {
    const employee = await Employee.findById(id);
    res.status(200).send({
      status: 200,
      response: employee,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.employeeId;
  try {
    const user = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    if (!user) {
      return res.status(500).send({
        status: 500,
        message: `user not found with id ${id}`,
      });
    }
    res.status(200).send({
      status: 200,
      message: "Update successfully",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send({
        status: 409,
        message: "Email already exists",
      });
    } else {
      res.status(500).send({
        status: 500,
        message: `Something wen't wrong`,
      });
    }
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.userId;
  try {
    const user = await User.findByIdAndRemove(id, {
      useFindAndModify: false,
    });
    if (!user) {
      return res.status(500).send({
        status: 500,
        message: `user not found with id ${id}`,
      });
    }
    res.status(200).send({
      status: 200,
      message: "Delete successfully",
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};
