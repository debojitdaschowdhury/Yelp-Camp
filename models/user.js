const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const passportLocalMongoose = require('passport-local-mongoose');
const crypto = require('crypto');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name cannot be empty'],
    },
    lastName: {
        type: String,
        required: [true, 'Last Name cannot be empty'],

    },
    email: {
        type: String,
        required: [true, 'Email cannot be empty'],
        unique: true

    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
    
});

// Instance method to generate a password reset token
userSchema.methods.createPasswordToken = function() {
    const token = crypto.randomBytes(32).toString('hex');
    this.resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');
    this.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // Token valid for 1 hour

    return token;
};


userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);

