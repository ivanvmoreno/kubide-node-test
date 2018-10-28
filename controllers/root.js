const Nota = require('../models/Nota');

// Controlador endpoint /crear-nota/
exports.crearNota = (req, res) => {
    const nuevaNota = new Nota({
        titulo: req.body.titulo,
        contenido: req.body.contenido
    });
    nuevaNota.save(err => {
        if (err) {
            res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

// Controlador endpoint /mis-notas/
exports.listaNotas = (req, res) => {
    Nota.find({}, (err, notas) => {
        if (err) {
            res.sendStatus(500);
        }
        res.send(notas);
    });
};

// Controlador endpoint /nota/titulo/?busqueda=
exports.consultarNotaTitulo = (busqueda) => {
    return new Promise((resolve, reject) => {
        Nota.find({ titulo: { $regex: busqueda, $options: 'i' } }, (err, nota) => {
            if (err) {
                reject(new Error(err));
            }
            resolve(nota);
        });
    })
};

// Controlador endpoint /nota/id/?id=
exports.consultarNotaID = (id) => {
    return new Promise((resolve, reject) => {
        Nota.findById(id, (err, nota) => {
            if (err) {
                reject(new Error(err));
            }
            resolve(nota);
        });
    });
};

// Controlador endpoint /marcar-favorita/
exports.marcarFavorita = (req, res) => {
    Nota.findById(req.query.id, (err, nota) => {
        if (err) {
            res.send('No existe ninguna nota con la ID proporcionada.')
        }
        nota.favorita = true;
        nota.save((err) => {
            if (err) {
                throw new Error(err);
            }
            res.sendStatus(200);
        });
    })
};

// Controlador endpoint /favoritas/
exports.listaFavoritas = (req, res) => {
    Nota.find({ favorita: true }, ((err, notas) => {
        if (err) {
            throw new Error(err);
        }
        res.send(notas);
    }));
};