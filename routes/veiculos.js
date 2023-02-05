const express= require('express');
const router = express.Router();
const veiculosCtlr = require("../controllers/veiculos");

 //criar um cliente
router.post("/",veiculosCtlr.createOne);

//recuperar todos os clientes 
router.get("/",veiculosCtlr.getAll)

//recuperar um cliente especifico
router.get("/:codigo",veiculosCtlr.getOne)

//Atualizar um cliente (Parcial)
router.patch("/:codigo",veiculosCtlr.changeOne)

//remover um cliente
router.delete("/:codigo",veiculosCtlr.removeOne);

module.exports =router

// //atualizar um cliente total
// router.put("/:codigo",veiculosCtlr.changeOne);