const { Schema } = require('mongoose');

const Perfil = new Schema({
    dados: {
        nome: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        }
    }
});

module.exports = Perfil;