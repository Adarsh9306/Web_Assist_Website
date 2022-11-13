const express = require('express');
var {register} = require('../controllers/user.js')
const bodyParser = require('body-parser');

const router = express.Router();

router.post("/",register);

module.exports = { router };