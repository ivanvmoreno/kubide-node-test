const express = require('express');
const router = express.Router();
const root = require('../controllers/root');

// Endpoint /crear-nota/
router.post('/crear-nota', root.crearNota);

// Endpoint /mis-notas/
router.get('/mis-notas', root.crearNota);

// Endpoint /nota/
router.get('/nota', root.crearNota);

// Endpoint /marcar-favorita/
router.post('/marcar-favorita', root.crearNota);

// Endpoint /favoritas/
router.get('/favoritas', root.crearNota);

// Exportamos router con todas los endpoints para requerirlo en /server.js
module.exports = router;