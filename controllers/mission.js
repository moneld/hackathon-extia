const Mission = require('../models/mission');


exports.getAllMission= async(req, res, next) => {
    const missions = await Mission.find()
        .then(missions => res.status(200).json(missions))
        .catch(error => res.status(501).json({error}));
}

exports.createMission=async(req, res, next) => {
    console.log("create user");
    const mission = await new Mission(req.body);
    mission.save()
        .then(() => res.status(201).json({ message: 'mission created !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.getMissionById=async(req, res, next) => {
    console.log("create user");

}




