const mongoose = require('mongoose');

// Define the schema for the user
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
