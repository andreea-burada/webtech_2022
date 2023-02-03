const express = require('express')

const app = express()

// the static content in public directory is delivered by the server(0.5 pts);
app.use(express.static('public'));

module.exports = app