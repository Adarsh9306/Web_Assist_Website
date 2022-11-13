//jshint esversion:6
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const _ = require('lodash');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const {validateToken,verifyRoles} = require("./controllers/JWT.js");
const ROLES_LIST = require("./roles_list.js");

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

var { router: userRegisterRoutes } = require("./routes/userRegister.js");
var { router: userLoginRoutes } = require("./routes/userLogin.js");
var { router: userSettingsRoutes } = require("./routes/userSettings.js");
var { router: getUserRoute } = require("./routes/getUser.js");

app.use("/register", userRegisterRoutes);
app.use("/login", userLoginRoutes);
app.use("/settings", userSettingsRoutes);
app.use("/get", getUserRoute);

mongoose.connect("mongodb://localhost:27017/webAssistDB", { useNewUrlParser: true, useUnifiedTopology: true });

let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}
app.listen(port, function () {
    console.log('Server started on port ' + port);
});