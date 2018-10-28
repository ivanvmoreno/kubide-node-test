const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/root.js');

const app = express();

// Conexión con DB de pruebas
mongoose.connect('mongodb://@ds135061.mlab.com:35061/mcfly-kubide', {
        useNewUrlParser: true,
        auth: {
            user: 'test',
            password: 'test123'
        }
    })
    // En caso de error, mostrar en consola
mongoose.connection.on('error', console.error.bind('console', 'Error de conexión: '))

// Configuramos Express para usar bodyParser como middleware para request en formato JSON o urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Endpoints exportadas desde /routes/root.js
app.use(routes);

app.listen(5555);