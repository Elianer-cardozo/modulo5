const db= require("../infra/connections");
const {ulid} = require("ulid");

class Veiculos{
    create(data, callback) {
        const {modelo , marca , cor , ano} = data;

        const sql = `INSERT INTO veiculos 
        (codigo,modelo , marca , cor , ano)
         VALUES 
         ('${ulid()}', '${modelo}', '${marca}', '${cor}', '${ano}')`;

db.run(sql, callback )
    }

    findAll(callback){
        const sql= "SELECT*FROM veiculos";
        db.all(sql,callback );
    }

    findOne(codigo,callback){
        const sql= `SELECT*FROM veiculos WHERE codigo = ${codigo}`;
        
        db.get(sql,callback );
    }

    deleteOne(codigo,callback){
        
        const sql = `DELETE FROM veiculos WHERE codigo = '${codigo}'`;
        
        db.run (sql, callback);
    }

    updataPartial(codigo, data, callback){
        let veiculoData= Object.entries(data);
        let fields = [];
        for(let i=0; i<veiculoData.length; i++){
            fields.push(`${veiculoData[1][0]} = '${veiculoData[1][1]}'`);
        }
        

        const sql = `UPDATE veiculos SET
                         ${fields.join(",")}
                         WHERE
                         codigo = '${codigo}'` ;
        db.run(sql, callback)

    }
}

module.exports = new Veiculos();





