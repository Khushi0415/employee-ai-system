const Employee = require("../models/Employee");

exports.addEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.searchEmployee = async (req, res) => {
    try {
        const dept = req.query.department;

        const employees = await Employee.find({
            department: dept
        });

        res.json(employees);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};