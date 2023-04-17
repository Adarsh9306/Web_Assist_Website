var {User} = require("../models/User.js");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cookieParser = require("cookie-parser");
const { createTokens} = require("./JWT.js");

const logIn = (req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;

        // console.log(username);
        // console.log(password);

        User.findOne({name: username},function(err,foundUser){
            if(err){
                res.status(404).json({message:err});
            }else{
                if(foundUser){
                    bcrypt.compare(password, foundUser.password, function(err, result) {
                        if(result === true){
                            const accessToken = createTokens(foundUser);
                            res.cookie("access-token", accessToken, {
                                maxAge: 60 * 60 * 24 * 30 * 1000,
                                httpOnly: true,
                            });
                            mainUsername = foundUser.name;
                            role = foundUser.roles;
                            res.status(200).json(foundUser);
                        }
                        else{
                            res.status(404).json({message:"Incorrect Password"});
                        }
                    });            
                }
            }
        });
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

const register = (req,res)=>{
    try{
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            const newUser = new User({
                name: req.body.username,
                password: hash,
                roles:{
                    User: 2001
                },
                definition: true,
                colorWheel: true,
                timeSpent: true,
                timeLimit: true            
            });
            newUser.save(function(err){
                if(err){
                    res.status(404).json({message:err.message});
                }
                else{
                    res.status(200).json("Succesful");
                }
            });
        });
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
};

const settings = (req,res)=>{
    try{
        User.updateOne({name: req.body.username},{$set: {definition: req.body.definition, colorWheel: req.body.colorWheel,timeSpent:req.body.timeSpent,timeLimit:req.body.timeLimit}},function(err,found){
            if(!err){
                res.status(200).json({message:"Succesfully Updated Settings"});
            }   
            else{
                res.status(404).json({message:err});
            }
        });
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

const getUser = (req,res)=>{
    try{
        User.find({name: req.body.username},function(err,found){
            if(!err){
                res.status(200).json({user:found});
            }   
            else{
                res.status(404).json({message:err});
            }
        });
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

module.exports = {logIn,register,settings,getUser};