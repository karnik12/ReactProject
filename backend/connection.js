const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const con = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});

con.connect( (error,result)=>{
    if (error){
        console.log(error, 'Error in connecting to mysql')
    }else{
        console.log('connected to mysql')
    }
})

module.exports = con 

