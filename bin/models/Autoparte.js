const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AutoparteSchema = new Schema({
    nombre: String,
    imagen: String,
    categoria: String,
    modelo: String,
    color: String,
});
var Autoparte = mongoose.model("Autoparte", AutoparteSchema);

module.exports = Autoparte;