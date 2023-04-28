const db = {};

const { userModel } = require('./userse.model');

db.users = userModel


module.exports = { db }