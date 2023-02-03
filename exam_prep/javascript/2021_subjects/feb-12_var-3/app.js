const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(cors());

app.get('/data', async (req, res) => {
    let raw_data = fs.readFileSync('./data.json');
    let data = JSON.parse(raw_data);
    return res.status(200).json(data);
});

// index.html file should be delivered as static content from the public directory. 
// It should contain a paragraph element with Webtech app text (0.5 pts);
app.use(express.static('public'));

module.exports = app;