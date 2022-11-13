const express = require('express');
var {logIn} = require('../controllers/user.js')
const bodyParser = require('body-parser');

const router = express.Router();

router.post("/",logIn);

module.exports = { router };