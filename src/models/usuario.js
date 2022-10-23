const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuario = new Schema({
    nome: String,
    sobrenome: String,
    cpf: String,
    crp: String,
    dataNascimento: String,
    email: String,
    senha: String,
    valorConsultaPadrao: String,
    endereco: {
      numero: String,
      cep:  String,
      logradouro:  String,
      complemento:  String,
      bairro:  String,
      localidade:  String,
      uf:  String,
    }
     



});

module.exports = mongoose.model('Usuario', usuario)