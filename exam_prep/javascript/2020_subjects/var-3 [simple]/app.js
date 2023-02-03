const express = require('express')
const cors= require("cors")
const app = express()

app.use(cors())

// index.html file should be delivered as static content from the public directory. 
// It should contain a paragraph element with Webtech app text (0.5 pts);
app.use(express.static('public'))


module.exports = app;