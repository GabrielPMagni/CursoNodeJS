const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');
const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.get('/', (req, res) => {
    let obj = req.query;
    return res.send({message: `Tudo ok com o método GET! Você enviou o nome ${obj.nome} com idade de ${obj.idade} anos!`});
});

app.post('/', (req, res) => {
    return res.send({message: 'Tudo ok com o método POST'});
});

app.listen(5000);

module.exports = app;