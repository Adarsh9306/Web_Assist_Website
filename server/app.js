//jshint esversion:6
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const {validateToken,verifyRoles} = require("./controllers/JWT.js");
const ROLES_LIST = require("./roles_list.js");
const bcrypt = require('bcrypt');

var {User} = require("./models/User.js");

const app = express();
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
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

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/loginAdmin",function(req,res){
    res.render("login");
});


app.post("/loginAdmin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({name: username},function(err,foundUser){
        if(err){
            console.log(err);
        }else{
            if(foundUser){
                bcrypt.compare(password, foundUser.password, function(err, result) {
                    if(result === true){
                        mainUsername = foundUser.name;
                        role = foundUser.roles;
                        if(role.Admin===5051){
                            res.redirect("/adminPage");
                        }
                    }
                    else{
                        res.send("Incorrect password");
                    }
                });            
            }
        }
    });
})

app.get("/adminPage",function(req,res){
    User.find({},function(err,users){
        var countDefinition = 0;
        var countTimer = 0;
        var countColor = 0;
        var countSetTime = 0;
        users.map((item)=>{
            console.log(item.definition)
            if(item.definition == true){
                countDefinition++;
            }
            if(item.colorWheel == true){
                countColor++;
            }
            if(item.timeSpent == true){
                countTimer++;
            }
            if(item.timeLimit == true){
                countSetTime++;
            }
        });
        setTimeout(()=>{
            res.render("admin",{items:users,countDefinition:countDefinition,countColor:countColor,countTimer:countTimer,countSetTime:countSetTime});
        },1000);
    });
});

app.post("/deleteUser", function (req, res) {
    var mainUsername = req.body.username;
    console.log(mainUsername);
    User.findOneAndRemove({name:mainUsername},function(err,foundList){
        if(err){
            res.send(err);
        }
        else{
            res.send("SuccesFully Deleted");
        }
    });
});



mongoose.connect("mongodb://localhost:27017/webAssistDB", { useNewUrlParser: true, useUnifiedTopology: true });

let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}
app.listen(port, function () {
    console.log('Server started on port ' + port);
});