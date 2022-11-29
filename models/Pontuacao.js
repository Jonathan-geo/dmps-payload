const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PontuacaoSchema = new Schema({
    nome: {
        type: String,
        require: true,
    },
    data: {
        type: Date,
        require: true,
    },
    simulado: {
        type: Number,
        require: true,
    },
    acerto: {
        type: Number,
        require: true,
    },
    erro: {
        type: Number,
        require: true,
    },

});


const Pontuacao = mongoose.model('pontuacaos', PontuacaoSchema);


module.exports = Pontuacao;