const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const fs = require('fs');

exports.signup= (req, res, next) => {

    const user = User.findOne({email:req.body.email },function(err,user){
        if(err){
            console.log(err.message)
        }
        let  msg;
        if(user){
            msg="user exists"
            console.log(msg)
            res.json({message: msg})
            //return res.redirect('/') //todo : to replace with right URL
        }else{
            bcrypt.hash(req.body.password,10)
                .then(hash =>{
                    const user= new User({
                        name: req.body.name,
                        firstname: req.body.firstname,
                        email: req.body.email,
                        login: req.body.login,
                        password: hash
                    });
                    user.save()
                        .then(()=>res.status(201).json({message: 'Opening user account !'}))
                        .catch(error => res.status(400).json({error}));
                })
                .catch(error => res.status(500).json({error}));
        }
    })
}
