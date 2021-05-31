const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

require('dotenv/config');
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

mongoose.connect(config.bd_string, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada com sucesso!');
})

mongoose.connection.on('error', (err) => {
    console.log(`Erro na conexão com o banco de dados: ${err}`)
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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