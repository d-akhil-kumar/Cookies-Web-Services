const express = require('express')

const route = express.Router()



route.post('/cookie', (req, res, next) => {
    const userDetails = { userName: "John Doe", password: "John@123" }
    res.cookie('user', userDetails);
    res.send({ message: "User Details Added to Cookies" });
})



route.post('/addToCookieWithPath', (req, res, next) => {
    res.cookie('userName', 'Maria Williams', { path: '/fetchCookieName' });
    res.send({ message: "UserName Added to Cookies with path" });
})



route.post('/addExpiresCookie', (req, res, next) => {
    const userDetails = { userName: "Emily Johnson", password: "emily@456" }
    res.cookie('temporaryUser', userDetails, { expires: new Date(Date.now() + 10000) });
    res.send({ message: "Session Cookie Added for 10 seconds" });
})



route.post('/addMaxAgeCookie', (req, res, next) => {
    const userDetails = { userName: "Emily Johnson", password: "emily@456" }
    res.cookie('temporaryUser', userDetails, { maxAge: 10000 });
    res.send({ message: "Session Cookie Added for 10 seconds" });
})



route.get('/cookies', (req, res, next) => {
    res.send(req.cookies);
})



route.get('/fetchCookieName', (req, res, next) => {
    res.send(req.cookies);
})


module.exports = route