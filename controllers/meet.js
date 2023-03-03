const Meet = require('../models/meet');
const meet = require("../models/meet");

exports.createMeet=async(req, res, next) => {

    console.log(req.body);
    const meet = await new Meet(req.body);
    meet.save()
        .then(() => res.status(201).json({ message: 'meet created !'}))
        .catch(error => res.status(400).json({ error }));

}
exports.getAllMeet= async(req, res, next) => {
    const meets = await Meet.find()
        .then(meets => res.status(200).json(meets))
        .catch(error => res.status(501).json({error}));
}
exports.getMeetById=async(req, res) => {
    console.log("get meet by id");
    try{
        let meet=await Meet.findOne({id:req.params.id});
        if (meet){
            return res.status(200).json(meet);
        }
        res.status(404).json({ message: 'meet not found !'})
    } catch(error){
        res.status(501).json({ message : error.message })
    }
}




