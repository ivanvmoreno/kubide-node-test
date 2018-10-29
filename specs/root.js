'use strict';

describe("Métodos de la API", () => {

    // Importamos el schema de las notas y los controladores
    const Nota = require('../models/Nota');
    const root = require('../controllers/root');

    // Objetos request y response para testing
    var req,
        res;

    beforeEach(() => {
        // Reseteamos los objetos request y response
        req = {
            body: {},
            query: {},
            params: {}
        }
        res = {
            send: () => {},
            sendStatus: () => {}
        }
    })

    // Endpoint /crear-nota/
    it('Crea una nueva nota en la base de datos', () => {
        spyOn(Nota.prototype, 'save');
        root.crearNota(req, res);
        expect(Nota.prototype.save).toHaveBeenCalled();
    });

    // Endpoint /mis-notas/
    it('Devuelve todas las notas almacenadas en la base de datos', () => {
        spyOn(Nota, 'find');
        root.listaNotas(req, res);
        expect(Nota.find).toHaveBeenCalled();
    });

    // Endpoint /nota/
    it('Devuelve la primera nota cuyo título coincida con el regex', () => {
        spyOn(Nota, 'find');
        root.consultarNotaTitulo(req, res);
        expect(Nota.find).toHaveBeenCalled();
    });
    it('Devuelve nota con el ID proporcionado', () => {
        spyOn(Nota, 'findById');
        // Preparamos el mock de la query
        req.query.id = 3;
        root.consultarNotaID(req, res);
        expect(Nota.findById).toHaveBeenCalled();
    });

    // Endpoint /marcar-favorita/
    it('Permite marcar como favorita una nota', () => {
        spyOn(Nota, 'findById');
        root.marcarFavorita(req, res);
        expect(Nota.findById).toHaveBeenCalled();
    });

    // Endpoint /favoritas/
    it('Devuelve una lista de todas las notas marcadas como favoritas', () => {
        spyOn(Nota, 'find');
        root.listaFavoritas(req, res);
        expect(Nota.find).toHaveBeenCalled();
    });
})