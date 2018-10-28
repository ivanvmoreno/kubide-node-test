const express = require('express');
const router = express.Router();
const root = require('../controllers/root');

// Endpoint /crear-nota/
router.post('/crear-nota', root.crearNota);

// Endpoint /mis-notas/
router.get('/mis-notas', root.listaNotas);

// Endpoint /nota/
router.get('/nota/:controlador', (req, res) => {
    switch (req.params.controlador) {
        case 'id':
            root.consultarNotaID(req.query.id)
                .then(resultado => res.send(resultado))
                .catch(err => res.sendStatus(500));
            break;
        case 'titulo':
            root.consultarNotaTitulo(req.query.busqueda)
                .then(resultado => res.send(resultado))
                .catch(err => res.sendStatus(500));
            break;
        default:
            throw new Error('El controlador al que intentas acceder no existe.')
    };
});

// Endpoint /marcar-favorita/
router.get('/marcar-favorita', root.marcarFavorita);

// Endpoint /favoritas/
router.get('/favoritas', root.listaFavoritas);

// Exportamos router con todas los endpoints para requerirlo en /server.js
module.exports = router;