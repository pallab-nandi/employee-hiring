const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
    immutable: true
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    }
  }
})


const userModel = mongoose.model('users', UserSchema);

module.exports = { userModel }