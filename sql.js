
const sql = require("mysql2");


const connection = sql.createConnection({

    host:"localhost",
    user:"root",
    password:"Lavan@2015",
    database:"testing",

})

connection.connect((err)=>{

    if (err) {
        console.log("database not connected");
        
    }else{
        console.log("data base connected");
    }
})

module.exports=connection