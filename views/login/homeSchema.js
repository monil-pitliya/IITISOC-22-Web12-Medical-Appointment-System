const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const Login = mongoose.model('Medical', userSchema)
module.exports = Login;

