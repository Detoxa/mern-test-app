const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// model db
const employeeSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    job: { type: String, required: true },
    birthdate: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
