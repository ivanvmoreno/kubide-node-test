const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('routes');

const app = express();

// Configuramos Express para usar bodyParser como middleware para request en formato JSON o urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Endpoints exportadas desde /routes/root.js
app.use(routes);

app.listen(5555);