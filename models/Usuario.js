const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UsuarioSchema = new Schema ({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    eAdmin:{
        type: Number,
        default: 0
    },
    data:{
        type: Date,
        default: Date.now()
    }
});


const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;