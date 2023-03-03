const Meet = require('../models/meet');

//todo: liste des utilisateurs ayant participe au meet
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




