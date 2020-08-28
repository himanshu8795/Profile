const mongoose = require('mongoose');
const URI ='mongodb+srv://mongodb:mongodb@cluster0.drkmz.mongodb.net/test?retryWrites=true&w=majority';
const connectDB = async () => { 
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true })
    console.log("connected...")
}
module.exports=connectDB;