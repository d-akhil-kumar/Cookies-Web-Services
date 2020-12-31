const express = require('express')

const route = express.Router()



route.get('/cookie', (req, res, next) => {
    const userDetails = { userName: "John Doe", password: "John@123" }
    res.cookie('user', userDetails, {signed: true});
    res.send({ message: "User Details Added to Cookies" });
})

route.get('/get', (req, res, next) => {
    
    res.send(req.signedCookies);
})




module.exports = route