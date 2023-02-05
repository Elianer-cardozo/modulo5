//importando módulos (dependencias)
const {PORT}= require("dotenv").config().parsed;
const express = require("express");
const app= express();

//Middleware
app.use(express.json());

//IMPLEMENTAÇÃO ALTERNATIVA
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

//Mapeamento das Rotas app.get- app.post - app.put - app.delete
const veiculos= require("../routes/veiculos");
app.use("/veiculos",veiculos) 

//require("../routes/users")(app);


//Iniciando a Aplicação - deixar a aplicação pronta para ser chamada
app.listen(PORT,()=> { console.log(`Servidor rodando na porta ${PORT}...`);});