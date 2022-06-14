const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 3001



require('dotenv/config');

app.use(express.json())

app.get('/', (req, res) => {
    res.send('First request');
});

app.get('/users', (req, res) => {
  let users = ['Adewumi', 'Abiodun', 'Alex', 'Chidozie',]
  res.send({
    users: users
  });
});

app.post('createUser', (req, res) => {
  console.log(req.body.name);

  res.send(`user created ${req.body.name}`)
});

mongoose.connect(process.env.DB_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true },(req,res) => {
  console.log('database connected')
})

app.listen(3001, ()=> {
  console.log('Listening on 3001');
});

