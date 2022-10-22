const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evento = new Schema({
    crp: String,
    date: String,
    start: String,
    end: String,
    title: String,
    time: String,
    cpfCliente: String,
    mes: String,
    ano: String,
    dia: String,
    realizado: Boolean,
    pago: Boolean,
    observacao: String,
    valorConsulta: String,
    data: String,
    meet: String,
    color: String
});

module.exports = mongoose.model('Evento', evento)