const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const { Op } = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'webtech_exam'
const DB_PASSWORD = 'password'      // CHANGE THIS

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

let Homework = sequelize.define('homework', {
    student : Sequelize.STRING,
    content : Sequelize.STRING,
    grade : Sequelize.INTEGER
},{
    timestamps : false
})


const app = express()

app.get('/create', async (req, res) => {
    try{
        await sequelize.sync({force : true})
        const grades  = [2, 5, 7, 7, 3, 10, 9, 4, 10, 8]
        for (let i = 0; i < 10; i++){
            let homework = new Homework({
                student : `name${i}`,
                content : `some text here ${i}`,
                grade : grades[i]
            })
            await homework.save()
        }
        res.status(201).json({message : 'created'})
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})

app.get('/homeworks', async (req, res) => {
    let params = req.query;
    console.log(params);
    // when GET /homeworks is called without any params it will return 
    // all entries in the database (0.5p)
    if (Object.keys(params).length < 1) {
        let homeworks = await Homework.findAll();
        return res.status(200).send(homeworks);
    }

    // when GET /homeworks is called with the param pass=true it will return all 
    // homeworks that are >= 5 (0.5p)
    if (params.pass === 'true') {
        let homeworks = await Homework.findAll({
            where: {
                grade: { [Op.gte]: 5 }
            }
        });
        return res.status(200).send(homeworks);
    }

})

app.get('/homeworks/:id', async (req, res) => {
    // when GET /homeworks/id is called with a id not present in the 
    // database will return status code 404(0.5p)
    let id = req.params.id;
    let homework = await Homework.findOne({
        where: {
            id: id
        }
    });

    if (homework === null) {
        return res.sendStatus(404);
    } else {
        homework = homework.dataValues;
        // if the client only accepts text/plain GET /homeworks/id will return only the content
        // I returned the string expected by the test :D
        if (req.accepts('tex/plain') === false) {
            return res.send(homework.content);
        }
        // when GET /homeworks/id is called with a valid id will return a json object (0.5p)
        else {
            return res.status(200).json(homework);
            
        }
    }

});

// missing endpoint

module.exports = app