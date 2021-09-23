const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EmployeeSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthday: {
        type: Date, 
        required: true
    },
    job: {
      type: String, 
      required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("employees", EmployeeSchema);