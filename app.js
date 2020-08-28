const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./connection/database');
const multer = require("multer");
const path = require("path");
const profileRoute = require('./routes/profileroute')
app.use(bodyParser.urlencoded({extended: true}));
connectDB();

// storage engine 

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000
 
         
    }
}) 
//image folder will serve as static content \
// 4000/upload for picture
//4000/profile for name and email in profile page
app.use('/pic', express.static('upload/images'));
app.use('/profile' , profileRoute)
app.post("/upload", upload.single('pic'), (req, res) => {

    res.json({
        success: 1,
        profile_url: `http://localhost:4000/pic/${req.file.filename}`
    })
})

function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.json({
            success: 0,
            message: err.message
        })
    }
}
app.use(errHandler);
app.listen(4000, () => {
    console.log("server up and running");
})