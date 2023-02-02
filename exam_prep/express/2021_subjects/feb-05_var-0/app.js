const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const mysql = require('mysql2/promise');

const DB_USERNAME = 'webtech_exam';
const DB_PASSWORD = 'password';    // CHANGE THIS

let conn;

mysql.createConnection({
    user: DB_USERNAME,
    password: DB_PASSWORD
    })
    .then((connection) => {
        conn = connection
        return connection.query('CREATE DATABASE IF NOT EXISTS tw_exam')
    })
    .then(() => {
        return conn.end()
    })
    .catch((err) => {
        console.warn(err.stack)
});

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD, {
    dialect: 'mysql',
    logging: false
});

let Ship = sequelize.define('student', {
    name: Sequelize.STRING,
    portOfSail: Sequelize.STRING,
    displacement: Sequelize.INTEGER
}, {
    timestamps: false
});


const app = express();
app.use(bodyParser.json());

app.get('/create', async (req, res) => {
    try {
        await sequelize.sync({ force: true })
        for (let i = 0; i < 10; i++) {
            let ship = new Ship({
                name: `name${i}`,
                portOfSail: `port ${i}`,
                displacement: 3000 + 10 * i
            })
            await ship.save()
        }
        res.status(201).json({ message: 'created' })
    }
    catch (err) {
        console.warn(err.stack)
        res.status(500).json({ message: 'server error' })
    }
})

app.get('/ships', async (req, res) => {
    // If a GET /ships request is performed subsequently, the body should contain 11 ships, 
    // including the one previoulsy added; (0.5 pts)
    let ships = await Ship.findAll();
    return res.status(200).send(ships);
});

app.post('/ships', async (req, res) => {
    // If no request body is present you should return a json with the following format: {"message": "body is missing"}. 
    // Response status code should be: 400; (0.5 pts)
    let body = req.body;
    if (Object.keys(body).length === 0) {
        return res.status(400).json({"message": "body is missing"});
    }

    // If the request body properties are missing you should return a json with the following format: {"message": "malformed request"}. 
    // Response status code should be: 400; (0.5 pts)
    if (body.hasOwnProperty('displacement') == false || body.hasOwnProperty('portOfSail') == false || body.hasOwnProperty('name') == false) {
        return res.status(400).json({"message": "malformed request"});
    }

    // Displacement should be over 1000, otherwise the server should return a message with the following 
    // format: {"message": "displacement should be over 1000"}. Response status code should be: 400; (0.5 pts)
    let displacement = body.displacement;
    if (displacement < 1000) {
        return res.status(400).json({"message": "displacement should be over 1000"});
    }

    // If the ship is valid, it should be added and a response with the code 201 should be returned. 
    // The response body should be {"message": "created"};(0.5 pts)
    let ship = new Ship(body);
    await ship.save();
    return res.status(201).json({"message": "created"});

});

module.exports = app