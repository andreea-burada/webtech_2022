const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storate: 'homework.db'
})

const Student = sequelize.define('student', {
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  age: Sequelize.INTEGER
}, {
  timestamps: false
})

const app = express()
app.use(bodyParser.json())

app.get('/create', async (req, res) => {
  try {
    await sequelize.sync({ force: true })
    for (let i = 0; i < 10; i++) {
      const student = new Student({
        name: 'name ' + i,
        address: 'some address on ' + i + 'th street',
        age: 30 + i
      })
      await student.save()
    }
    res.status(201).json({ message: 'created' })
  } catch (err) {
    console.warn(err.stack)
    res.status(500).json({ message: 'server error' })
  }
})

app.get('/students', async (req, res) => {
  try {
    const students = await Student.findAll()
    res.status(200).json(students)
  } catch (err) {
    console.warn(err.stack)
    res.status(500).json({ message: 'server error' })
  }
})

app.post('/students', async (req, res) => {
  try {
    var keys = Object.keys(req.body);
    console.log(keys);
    // if body request is empty
    if (keys.length === 0)
      res.status(400).json({message: 'body is missing'});
    else
    {
      // if json format is wrong
      let list_check = ['name', 'address', 'age'];
      if (keys.every(r => list_check.includes(r)) == false || keys.length != 3)
        res.status(400).json({message: 'malformed request'});
      else
      {
        // request has the right format -> process data
        // get req body as json
        var student_json = req.body;
        if ( student_json.age < 0 )
          res.status(400).json({message: 'age should be a positive number'});
        else
        {
          // add student to DB
          const new_student = new Student({
            name: student_json.name,
            address: student_json.address,
            age: student_json.age
          })
          await new_student.save();
          res.status(201).json({message: 'created'});
        }
      }
    }
  } catch (err) {
    console.warn(err.stack)
    res.status(500).json({ message: 'server error' })
  }
})

module.exports = app
