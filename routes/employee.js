const app = require('../app')
const router = require('express').Router();
const employee  = require('../controllers/employee')

router.get('/',(req,res)=> employee.createGet(req,res));

router.post('/', (req,res)=>employee.createPost(req,res));

module.exports = router;