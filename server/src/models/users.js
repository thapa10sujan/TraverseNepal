const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
 fullName: {type:String, required: true } ,  // String is shorthand for {type: String}
 phoneNumber: {type:String, required: true},
 email: String,
 password: String,
 address: String ,
 role: {type:String, default: 'user' }
 });
 
 const Users = mongoose.model('Users', userSchema);
 module.exports = Users