/* //config  X

const {config} = require('dotenv');

config();

module.exports = {

    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    secret: 'mysecrettext'
}

//configMySQL

 const mysql = require('mysql');
 const config = require('./config');


 const Conexion = mysql.createConnection({
    user: config.user,
    database: config.database,
    password: config.password,
    host: config.host,
    
 })

 const mysqlConexion = () =>{
    console.log('conexion true');
    return Conexion();
 }

 module.exports = mysqlConexion;
 */
/* 
 //config

 const {config} = require('dotenv');

 config();

 module.exports = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    secret: 'mysecrettext'
 }

 //mysqlConexion
 const mysql = require('mysql');
 const config = require('./config');

 const Conexion =   mysql.createConnection({
    user: config.user,
    password: config.password,
    database: config.database,
    host: config.host
 })

 const mysqlConexion = () => {
    console.log('db true');
    return Conexion();

 }

 module.exports = mysqlConexion; */

 //config
/* 
 const {config} = require('dotenv');

 config();

 module.exports = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    secret: 'mysecrettext'
 }

 //mysqlConexion

 const mysql = require('mysql');
const config = require('./config');

const conexion = mysql.createConnection({
    user: config.user,
    password: config.password,
    database: config.database,
    host: config.host,

})

const mysqlConexion = () =>{
    console.log('db true');
    return conexion();
}

module.exports = mysqlConexion;
 */

//config

/* const {config} = require('dotenv');

config();

module.exports = {

    user: process.USER ,
    password: process.PASSWORD ,
    database: process.DATABASE ,
    host: process.HOST ,
    secret: 'mysecrettext'
}

//mysqlConexion

const mysql = require('mysql');
const config = require('./config');

const Conexion = mysql.createConnection({
    user: config.user ,
    password: config.password ,
    host: config.host ,
    database: config.database 
})

const mysqlConexion = () => {
    console.log('db true');
    return Conexion();

};

module.exports = mysqlConexion; */

//config.js
/* 
const {config} = require('dotenv');

config();

module.exports = {

    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    secret: 'mysecrettext'
}


//mysqlConexion.js

const mysql = require('mysql');
const config = require('./config');

const Conexion = mysql.createConnection({
    user: config.user,
    password: config.password,
    database: config.database,
    host: config.host
})

const mysqlConexion = ()=>{
    console.log('db true');
    return Conexion();

}

module.exports = mysqlConexion; */

//sentecia
/* 
const mysqlConexion = require('../db/conexionMysql');
const conexion = await mysqlConexion();
const result = await conexion.query();
res.json(result); */

/* 
const mysqlConexion = require('../db/mysqlConexion');
const conexion = await mysqlConexion();
const result = await conexion.query();
res.json(result)
 */

/* const mysqlConexion = require('../db/mysqlConexion');
const conexion = await mysqlConexion();
const result = await conexion.query();
res.json(result)
 */

/* 
const mysqlConexion = require('./db/mysqlConexion');
const conexion = await mysqlConexion();
const result = await conexion.query();
res.json(result) */

/* const mysqlConexion = require('../db/mysqlConexion');
const conexion = await mysqlConexion();
const result = await conexion.query();
res.json(result); */
/* 
const mysqlConexion = require('../db/mysqlConnexion');
const conexion = await mysqlConexion();
const result = await conexion.query();
res.json(result); */

//config

const {config} = require('./config');
config();
module.exports = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    secret: 'mysecrettext'

}

//mysqlConexion

const mysql = require('mysql');
const config = require('./config');

const Conexion = mysql.createConnection({
    user: config.user,
    password: config.password,
    host: config.host,
    database: config.database
})

const mysqlConexion = () => {
    console.log('db true');
    return Conexion();

}

module.exports = mysqlConexion;