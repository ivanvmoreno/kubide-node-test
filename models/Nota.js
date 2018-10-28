const mongoose = require('mongoose');

// Usamos ES6 Promises en lugar de las Promises nativas de mongoose
mongoose.Promise = global.Promise;

// Schema de una nota
const notaSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        required: true
    },
    titulo: {
        type: String,
        trim: true,
        required: true
    },
    contenido: {
        type: String,
        trim: true,
        required: true
    },
    favorita: {
        type: Boolean
    }
})

// Exportamos el modelo de notaSchema
module.exports = mongoose.model('Nota', notaSchema);