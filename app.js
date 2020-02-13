const express = require('express');
const mysql = require('mysql');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

const sequelize = new Sequelize('database1','root','rohan@dev',{
    host:'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(()=>{console.log('connection established')})
.catch((err)=>{console.error("unable to connect",err)})


const Employee = require('./models/employee')(sequelize,DataTypes);

app.get('/api/employee/get',(req,res)=>{
    Employee.findAll().then(result=>res.json(result))
})

app.post('/api/employee/post',(req,res)=>{
    const {employee_name,employee_designation,salary} = req.body;
    Employee.create({
        employee_name:employee_name,
        employee_designation:employee_designation,
        salary:salary
    }).then(()=>res.json({
        success:'New record added in the table'
    })).catch(err=>res.json(err))
})













// const connection = mysql.createConnection({
//     host:'localhost',
//     password:'rohan@dev',
//     user:'root',
//     database:'database1'
// })

// connection.connect((err)=>{
//     if (err) throw err;
//     console.log('database connected');
// })


// app.get('/',(req,res)=>{
//     connection.query('select * from employee',(err,result)=>{
//         if (err) throw err;
//         res.send(result).status(200)
//     })
// })

module.exports = app;