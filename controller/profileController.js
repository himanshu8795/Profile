const User = require('../models/profile');

const edit = (req,res,next) =>{

let user = new User({
    name: req.body.name,
    email: req.body.email
})

    user.save()
    .then(user => {
        res.json({
            message : "Profile Added Succesfully"
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Occured"
        })
    })
}
    module.exports = {edit}