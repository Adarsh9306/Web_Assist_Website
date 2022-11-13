const express = require('express');
var {getUser} = require('../controllers/user.js')
const bodyParser = require('body-parser');

const router = express.Router();

router.post("/",getUser);

module.exports = { router };