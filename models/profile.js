const mongoose = require('mongoose');
const { Timestamp } = require('mongodb');
const Schema = mongoose.Schema


const userSchema = new Schema({
     name : {
         type : String
     },
     email : {
         type : String
     }
}, {Timestamp : true })

const User = mongoose.model('User' , userSchema)
module.exports = User