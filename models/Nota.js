const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// Usamos ES6 Promises en lugar de las Promises nativas de mongoose
mongoose.Promise = global.Promise;

// Schema de una nota
const notaSchema = new mongoose.Schema({
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
        type: Boolean,
        default: false
    }
})

// Inicializamos el módulo mongoose-auto-increment
autoIncrement.initialize(mongoose.connection);
notaSchema.plugin(autoIncrement.plugin, 'Nota');

// Exportamos el modelo de notaSchema
module.exports = mongoose.model('Nota', notaSchema);