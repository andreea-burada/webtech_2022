const express = require('express')

const app = express()

app.get('/cars', (req, res) => {
    let filter = req.query.filter
    if (!filter){
        res.status(200).json([{
            name :  'a',
            color : 'red'
        },{
            name :  'b',
            color : 'blue'
        }])
    }
    else{
        res.status(200).json([{
            name :  'a',
            color : 'red'
        },{
            name :  'b',
            color : 'blue'
        }].filter((e) => e.color === filter))
    }
})

// the file index.html, which contains the text A simple app should be 
// delivered from the server as static content (0.5 pts);
app.use(express.static('public'));

module.exports = app