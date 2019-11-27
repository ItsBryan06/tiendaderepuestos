const mongoose = require("mongoose");
const Cliente = require("./models/Cliente");
const Envio = require("./models/Envio");
const Autoparte = require("./models/Autoparte");
const Proveedor = require("./models/Proveedor");
class Controller{
    constructor(){
        this.connect();
    }
   async connect(){
       try{

           await mongoose.connect(
               "mongodb+srv://mongo1:IPxlNMxO81dLAcS8@cluster0-1yjyt.mongodb.net/repuestos?retryWrites=true&w=majority",
               {useNewUrlParser:true}
           );
           console.log("conectado");

       } catch(e){
           console.error(e);
       }
   }

   getClientes(res){
       Cliente.find({}, (err, clientes)=>{
           if(err) throw err;

           res.send(clientes);
       })
   }
      getClientesid( id_cliente, res){
       Cliente.find({_id:id_cliente}, (err, clientes)=>{
           if(err) throw err;

           res.send(clientes);
       })
}
    getEnvios( id_cliente, res){
       Envio.find({id_cliente:id_cliente}, (err, envios)=>{
           if(err) throw err;

           res.send(envios);
       })
}
getEnviosid(res){
    Envio.find({}, (err, envios)=>{
        if(err) throw err;

        res.send(envios);
    })
}


getAutopartesid( id_autoparte, res){
       Autoparte.find({_id:id_autoparte}, (err, autopartes)=>{
           if(err) throw err;

           res.send(autopartes);
       })
}
getAutopartes(res){
       Autoparte.find({}, (err, autopartes)=>{
           if(err) throw err;

           res.send(autopartes);
       })
   }
    getProveedor(res){
       Proveedor.find({}, (err, proveedores)=>{
           if(err) throw err;
           res.send(proveedores);
       })
   }
   getProveedorid( id_proveedor, res){
       Proveedor.find({_id:id_proveedor}, (err, proveedores)=>{
           if(err) throw err;
           res.send(proveedores)
       })
   }


}

exports.controller = new Controller();