const { Schema } = require('mongoose');

const Pedido = new Schema({
    cliente: {
        nome: {
            type: String,
            require: true,
        },
        sobrenome: {
            type: String,
            require: true,
        }
    },
    pizzas: [
        {
            sabor: {
                type: String,
                require: true,
            },
            quantidade: {
                type: Number,
                require: true,
            },
            tamanho: {
                type: String,
                require: true,
                enum: ['Pequeno', 'Método', 'Grande']
            }
        }
    ],
    metodoDePagamento: {
        type: String,
        required: true,
        enum: ['PIX', 'Cartão de Crédito'],
    },
    total: {
        type: Number,
        required: true,
    },
    pago: {
        type: Boolean,
        default: false,
    }
});

module.exports = Pedido;