const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProveedorSchema = new Schema({
    nombre: String,
    telefono: String,
    direccion: String,
});
var Proveedor = mongoose.model("Proveedor", ProveedorSchema);

module.exports = Proveedor;