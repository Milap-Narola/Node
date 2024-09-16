const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['student', 'faculty'] },
    gridNo: String,
    schoolName: String,
    course: String
});

module.exports = mongoose.model('User', UserSchema);