
const sequelize = require('../app')
var DataTypes = require('sequelize/lib/data-types');
const Op = require('sequelize').Op
const db = require('../models').db
const employee = db.employee;


const createPost = (req,res)=>{
    const {employee_name,employee_designation,salary} = req.body;
    db.create({
        employee_name:employee_name,
        employee_designation:employee_designation,
        salary:salary
    }).then(()=>res.json({
        success:'New record added in the table'
    })).catch(err=>res.json(err.message))
}

 const getEmployee =(req,res) =>  {
     try {
        db.employee.findAll({
            where:{employee_name:"rohan"}}).then(result=>res.json(result));
     } catch (error) {
        console.log(error)
     }
}

const updateEmployee =(req,res) =>  {
    try {
        db.employee.findAll({
           where:{employee_name:"rohan"}}).then(result=>res.json(result));
    } catch (error) {
       console.log(error)
    }
}

const deleteEmployee =(req,res) =>  {
    try {
        db.employee.findAll({
           where:{employee_name:"rohan"}}).then(result=>res.json(result));
    } catch (error) {
       console.log(error)
    }
}

module.exports.getEmployee =  getEmployee;
module.exports.createPost =  createPost;
module.exports.updateEmployee =  updateEmployee;
module.exports.deleteEmployee =  deleteEmployee ;