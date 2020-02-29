const express = require('express');
const mysql = require('mysql');
const logger = require('morgan');
const bodyParser = require('body-parser');
const {Sequelize,DataTypes} = require('sequelize');
const employeeRoute = require('./routes/employee');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));


const sequelize = new Sequelize('database1','root','rohan@dev',{
    host:'localhost',
    dialect: 'mysql',
    pool:{
        max:5,
        idle:10000,
        acquire:10000,
    }
})



sequelize.authenticate()
.then(()=>{console.log('connection established')})
.catch((err)=>{console.error("unable to connect",err)});

sequelize.sync();

app.use('/api/employee',employeeRoute)


module.exports = app;