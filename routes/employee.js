const app = require('../app')
const Router = require('express').Router();
const employee  = require('../controllers/employee')

module.exports = Router.get('/get',(req,res)=> employee.getEmployee(req,res));

module.exports = Router.post('/post', (req,res)=>employee.createEmployee(req,res));

module.exports = Router.put('/update', (req,res)=>employee.updateEmployee(req,res));

module.exports = Router.delete('/delete', (req,res)=>employee.deleteEmployee(req,res));

