const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    nombre1: String,
    nombre2: String,
    apellido: String,
    direccion: String,
    correo: String,
    telefono: String,
});
var Cliente = mongoose.model("Cliente", ClienteSchema);

module.exports = Cliente;