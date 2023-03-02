const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const fs = require('fs');


function getRandomSecretKey(){
    const key = fs.readFileSync('./secret/sensitive.key', {encoding:'utf8', flag:'r'});
    return key;
}

exports.signup= (req, res, next) => {

    const user = User.findOne({email:req.body.email },function(err,user){
        if(err){
            console.log(err.message)
        }
        let  msg;
        if(user){
            msg="user already exists"
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


exports.login = async (req, res, next) => {
    console.log("login");
    const user = await User.findOne({email: req.body.email})
    if (!user) {
        return res.status(401).json({message: 'Incorrect login/password'});
    }

    const passwordOk = await bcrypt.compare(req.body.password, user.password)
    if (!passwordOk) {
        return res.status(401).json({message: 'Incorrect login/password'});
    }

    res.status(200).json({
        userId: user._id,
        token: jwt.sign({userId: user._id}, getRandomSecretKey(),
            {expiresIn: '2h'},
            function (err, token) {
                console.log("token generated at login :" + token)
            })
        /*token:jwt.sign({userId:user._id}, 'sensitive.key', { algorithm: 'RS256' }, function(err, token) {
            console.log(token);
        })*/
        //return res.redirect('/') //todo : to replace with right URL to redirect

    });
}

exports.logout= ( req, res, next) => { //todo : to do work this middleware
    console.log("logout");
    req.logout()
    req.session.destroy();
    res.redirect("/"); //return res.redirect('/') //todo : to replace with right URL to redirect
}