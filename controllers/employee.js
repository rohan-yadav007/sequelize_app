
const sequelize = require('../app')
var DataTypes = require('sequelize/lib/data-types');
const Op = require('sequelize').Op
const db = require('../models')
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

 const createGet =(req,res) =>  {
     try {
         
        employee.findAll({
            where:{employee_name:"rohan"}}).then(result=>res.json(result));
        
     } catch (error) {
        console.log(error)
     }
    
//

}

module.exports = {createGet, createPost};