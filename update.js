const mongoose = require("mongoose");
const { employeeSchema } = require("./schema");

const employeeModel = mongoose.model('employees', employeeSchema);

const updateSalary = async () => {
    try {
        const result = await employeeModel.updateMany({"salary": {$gt: 30000}}, {$set: {"salary": 28000}});

        console.log("Succesfully updated  salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

module.exports = {updateSalary}