const express = require("express");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");

const DB_USERNAME = "root";
const DB_PASSWORD = "password";
let conn;

mysql
  .createConnection({
    user: DB_USERNAME,
    password: DB_PASSWORD,
  })
  .then((connection) => {
    conn = connection;
    return connection.query("CREATE DATABASE IF NOT EXISTS tw_exam");
  })
  .then(() => {
    return conn.end();
  })
  .catch((err) => {
    console.warn(err.stack);
  });

const sequelize = new Sequelize("tw_exam", DB_USERNAME, DB_PASSWORD, {
  dialect: "mysql",
  logging: false,
});

class Device extends Sequelize.Model {}

Device.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
    },
  },
  {
    sequelize,
    modelName: "devices",
    timestamps: false,
  }
);

const app = express();
app.use(bodyParser.json());

app.get("/create", async (req, res) => {
  await sequelize.sync({ force: true });
  for (let i = 0; i < 10; i++) {
    await Device.create({
      name: `Device-${i}`,
      price: `${Math.random() * 100 + i + 10}`,
    });
  }
  res.status(201).json({ message: "devices created" });
});

app.get("/device", async (req, res) => {
  const devices = await Device.findAll();
  res.status(200).send(devices);
});

app.post("/device", async (req, res) => {
  // POST /device returns status code 400 and response {message: 'bad request'} if body
  // is null (0.5 pts);
  let body = req.body;
  if (Object.keys(body).length === 0) {
    return res.status(400).json({ message: "bad request" });
  }

  // POST /device returns status code 400 and response {message: 'bad request'} if price < 0 (0.5 pts);
  let price = body.price;
  if (price < 0) {
    return res.status(400).json({ message: "bad request" });
  }

  // POST /device returns status code 400 and response {message: 'bad request'} if
  // name contains less than 4 characters (0.5 pts);
  let name = body.name;
  if (name.length < 5) {
    return res.status(400).json({ message: "bad request" });
  }

  // POST /device returns status code 201 and response {message: "device created"} if body
  // is valid (0.5 pts);
  let new_device = new Device(body);
  await new_device.save();
  return res.status(201).json({ message: "device created" });
});

app.delete("/device/:id", async (req, res) => {
  // DELETE /device/:id returns status code 202 and response {message: "device deleted"} if 
  // id for a device is present in the database (0.5 pts);
  let device = await Device.findOne({
    where: {
      id: req.params.id,
    },
  });
  device.destroy();
  return res.status(202).json({ message: "device deleted" });
});

module.exports = app;