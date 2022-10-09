const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    crpResponsavel: String,
    nome: String,
    cpf: String, 
    dataNascimento: String,
    telefone: String,
    contatoEmergencia: String,
    email: String,
    endereco: {
        cep: String,
        logradouro: String,
        numero: String,
        complemento: String,
        bairro: String,
        localidade: String,
        uf: String
    },
    dataPagamento: String,
    valorCombinado: String

});

module.exports = mongoose.model('Cliente', cliente)