const Nota = require('../models/Nota');

// Controlador endpoint /crear-nota/
exports.crearNota = (req, res) => {
    console.log('Crear nota');
};

// Controlador endpoint /mis-notas/
exports.listaNotas = (req, res) => {
    console.log('Lista de notas');
};

// Controlador endpoint /nota/
exports.consultarNota = (req, res) => {
    console.log('Única nota');
};

// Controlador endpoint /marcar-favorita/
exports.marcarFavorita = (req, res) => {
    console.log('Marcar como favorita');
};

// Controlador endpoint /favoritas/
exports.listaFavoritas = (res, res) => {
    console.log('Lista de favoritas');
};