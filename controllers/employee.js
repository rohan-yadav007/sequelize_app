
const sequelize = require('../app')
var DataTypes = require('sequelize/lib/data-types');
const Op = require('sequelize').Op
const db = require('../models').db
const employee = db.employee;


const createEmployee = (req,res)=>{
    try {
        db.employee.create(req.body)
    .then((result)=>res.json({result})) 
    } catch (error) {
        console.log(error)
    }
}

 const getEmployee =(req,res) =>  {
     try {
        db.employee.findAll({attributes:[ ['id','SN'],['employee_name','name'], 'salary' ]}).then(result=>res.json(result));
     } catch (error) {
        console.log(error)
     }
}

const updateEmployee =(req,res) =>  {
    try {
        db.employee.update(req.body,{
           where:{id:req.body.id}}).then(result=>res.json(result));
    } catch (error) {
       console.log(error)
    }
}

const deleteEmployee =(req,res) =>  {
    try {
        db.employee.destroy({
           where:{id:req.body.id}}).then(result=>res.json(result));
    } catch (error) {
       console.log(error)
    }
}

module.exports.getEmployee =  getEmployee;
module.exports.createEmployee =  createEmployee;
module.exports.updateEmployee =  updateEmployee;
module.exports.deleteEmployee =  deleteEmployee ;