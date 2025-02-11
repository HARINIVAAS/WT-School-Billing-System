const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    rollno: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
