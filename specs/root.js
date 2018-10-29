'use strict';

// Endpoint /crear-nota/
describe("Métodos", () => {

    const Nota = {
        a: 'a',
        get validador() {
            if (this.a != undefined && this.b != undefined) {
                return true;
            }
        }
    };

    Nota.save = () => {

    };

    describe('/crear-nota', () => {
        const crearNota = () => {
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

        it('Crea una nueva nota en la base de datos', () => {
            spyOn(Nota, 'save');
            crearNota();
            expect(Nota.save).toHaveBeenCalled();
        });
    });
})