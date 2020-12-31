const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const unsignedRoute = require('./routes/unsignedCookie.js')
const signedRoute = require('./routes/signedCookie.js')


const app = express()


app.use(cookieParser('akhil-key'))
app.use(bodyParser.json())
app.use(signedRoute)
//app.use(unsignedRoute)

app.listen(3000, () => console.log('Server is running'))
