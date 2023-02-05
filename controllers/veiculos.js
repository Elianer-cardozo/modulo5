    const veiculo = require("../dao/veiculo");

    exports.createOne = (req,resp) => {
    veiculo.create(req.body, (err)=>{
        if (!err) {
        resp.status(201).send({});
        }else{
        resp.status(401).send({err});
        }
        });
    
};  


exports.getAll = (req,resp) =>{
        veiculo.findAll((err, data)=> resp.send(data));
        },

    exports.getOne = (req,resp) => {
        veiculo.findOne(req.params.codigo, (err, data)=> {
            if (data){
                resp.status(200).send(data);
            }else{
                resp.status(404).send({errMsg: "veiculo not found"});
            }
        });
    };

    exports.changeOne = (req,resp) => {
    veiculo.updataPartial(req.params.codigo, req.body, (err) => {
        if(err){
            resp.status(400).send({msg:err})
        } else {
            resp.status(204).end();
        }
    });
    };

    exports.removeOne = (req,resp) => {
        veiculo.deleteOne(req.params.codigo, (err)=>{
            if(!err) resp.status(204).end();
        });
    }

/*

----ALTERNATIVA DE IMPLEMENTAÇÃO----
module.exports={
   
    createOne: (req,resp) => resp.send("POST CLIENTE"),

    getAll: (req,resp) =>{
        const sql= "SELECT*FROM veiculos"
        db.get(sql,function (err, data){
            console.log("rodou",err,data);
            resp.send(data);
    });
        },

    getOne: (req,resp) => resp.send("GET ONE CLIENTE"),

    changeOne: (req,resp) => resp.send("PUT CLIENTE"),

    removeOne: (req,resp) => resp.send("DELETE CLIENTE"),
}; */