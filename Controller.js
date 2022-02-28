//Constantes chamando os modulos express, body parser and cors
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./models')

let app = express();

app.use(cors());

//trabalhar com requisições post
app.use(bodyParser.urlencoded({ extended: false }))

//trabalhar com requisições json
app.use(bodyParser.json())

//routes
app.post('/create', async(req, res) => {
  let reqs = await model.User.create({
    'name': req.body.nameUser,
    'password': req.body.passwordUser,
    'email': req.body.emailUser,
    'balance': 1000,
  })
  if(reqs) {
    res.send(JSON.stringify("O Usuario foi cadastrado com sucesso"));
  }
})

let port = process.env.PORT || 3000;
app.listen(port,(req, res) => {
  console.log('servidor rodando');
})