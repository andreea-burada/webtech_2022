const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'webtech_exam'
const DB_PASSWORD = 'password'       // CHANGE THIS

let conn

mysql.createConnection({
    user : DB_USERNAME,
    password : DB_PASSWORD
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
})

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD,{
    dialect : 'mysql',
    logging: false
})

let Ship = sequelize.define('ship', {
    name : Sequelize.STRING,
    portOfSail : Sequelize.STRING,
    displacement : Sequelize.INTEGER
},{
    timestamps : false
})


const app = express()

app.get('/create', async (req, res) => {
    try{
        await sequelize.sync({force : true})
        for (let i = 0; i < 10; i++){
            let ship = new Ship({
                name : `name${i}`,
                portOfSail : `port ${i}`,
                displacement : 3000 + 10 * i
            })
            await ship.save()
        }
        res.status(201).json({message : 'created'})
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})

app.get('/ships', async (req, res) => {
    // supported query params are page and pageSize
    let pageNo = req.query.pageNo;
    let pageSize = req.query.pageSize;
    console.log('pageNo', pageNo, 'pageSize', pageSize);

    let all_ships = await Ship.findAll();

    // If no page or page size is specified, all ships are returned; (0.5 pts)
    if (typeof pageNo === 'undefined' && typeof pageSize === 'undefined') {
        return res.status(200).send(all_ships);
    }

    if (typeof pageNo !== 'undefined') {
        let noShips = all_ships.length;
        console.log(isNaN(pageNo));
        console.log(noShips);

        // If a page is specified, but no page size, the page size is assumed to be 5
        if (typeof pageSize === 'undefined') {
            pageSize = 5;
        }

        // If a malformed page or page size is specified, all ships are returned; (0.5 pts)
        if (isNaN(pageNo) === true || isNaN(pageSize) === true) {
            return res.status(200).send(all_ships);
        }

        pageNo = parseInt(pageNo);
        pageSize = parseInt(pageSize);

        // If the specified page is beyond the last available record, an empty array of pages is returned. (0.5 pts)
        if ((pageNo + 1) * pageSize > (noShips + 1)) {
            return res.send([]);
        }

        // If a page is specified, but no page size, the page size is assumed to be 5 and 
        // the nth page of 5 is returned (0.5 pts)

        // If both page and page size are specified, the page-th page of the specified size is returned (0.5 pts)
        let ships = [];
        for (let i = 0; i < pageSize; i ++) {
            ships.push(all_ships[pageNo * pageSize + i]);
        }
        return res.send(ships);
    }
})

app.post('/ships', async (req, res) => {
	try{
		let ship = new Ship(req.body)
		await ship.save()
		res.status(201).json({message : 'created'})
	}
	catch(err){
		res.status(500).json({message : 'server error'})		
	}
})

module.exports = app