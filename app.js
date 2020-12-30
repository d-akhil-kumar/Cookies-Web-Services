const express = require('express')
const cookieParser = require('cookie-parse')
const bodyParser = require('body-parser')


const app = express()


app.use(cookieParser)
app.use(bodyParser)

app.listen(3000, () => console.log('Server is running'))
