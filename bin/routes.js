const express = require("express");
const app= express();
const cors = require("cors");
const { controller } = require("./controller");

app.use(cors());
app.get("/", (req, res) =>{
    res.send("Tienda de repuestos ");
} );
/*=====================================================================*/
/*COMPONENTE DE PROVEEDORES*/
//COMPONENTE: OBTENER PROVEEDORES
app.get("/proveedores", (req, res) => {
    controller.getProveedor(res);
})
//COMPONENTE: OBTENER PROVEEDOR ESPECÍFICO
app.get("/proveedores/:id_proveedor", (req, res)=>{
    let id_proveedor= req.params.id_proveedor
    controller.getProveedorid(id_proveedor, res);
});
/*=====================================================================*/
/* COMPONENTE DE CLIENTES */
//COMPONENTE: OBTENER CLIENTES
app.get("/clientes", (req, res)=>{
    controller.getClientes(res);


});
//COMPONENTE: OBTENER CLIENTE ESPECÍFICO
app.get("/clientes/:id_cliente", (req, res)=>{
    let id_cliente= req.params.id_cliente
    controller.getClientesid(id_cliente, res);
});
/*=====================================================================*/
/*COMPONENTE ENVÍO ESPECÍFICO*/
    //COMPONENTE: OBTENER ENVÍO DE UN CLIENTE
    app.get("/clientes/:id_cliente/envios", (req, res) => {
    let id_cliente= req.params.id_cliente
    controller.getEnvios( id_cliente, res)
});

/*=====================================================================*/
/*COMPONENTE AUTOPARTES*/
    //COMPONENTE: OBTENER AUTOPARTES
app.get("/autopartes", (req, res)=>{

    controller.getAutopartes(res);


});
    //COMPONENTE: OBTENER UNA AUTOPARTE EN ESPECÍFICO
 app.get("/autopartes/:id_autoparte", (req, res) => {
      let id_autoparte= req.params.id_autoparte
    controller.getAutopartesid( id_autoparte, res)
});
/*=====================================================================*/
    /*COMPONENTES ENVÍOS*/
app.get("/autopartes/envio", (req, res) => {
    controller.getEnviosid(res);
})

exports.app = app;