const express = require('express');
var {settings} = require('../controllers/user.js')
const bodyParser = require('body-parser');

const router = express.Router();

router.post("/",settings);

module.exports = { router };