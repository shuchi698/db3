const mongoose = require("mongoose");
const {insertWithManyWithMongoose} = reuire('./create');
const {deleteLastCompany} = require('./delete')
const {updateSalary} = require('./update')
const {findAllMongoose, findWihSalary, findWithExp, findWithTwoCondition} =require('./read')
const connectionString = 'mongodb://127.0.0.1:127017/human_resources'

insertManyWithMongoose()
findAllMongoose()
findWithSalary()
findWithExp()
findWithTwoConditon()
updateSalWithMongoose()
deletingWithMongoose()


