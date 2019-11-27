const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnvioSchema = new Schema({
    fecha: String,
    precio: String,
    cargamentos: String,
    id_cliente: {
        type:Schema.Types.ObjectId,
        ref: "Cliente"
    }
});
var Envio = mongoose.model("Envio", EnvioSchema);

module.exports = Envio;