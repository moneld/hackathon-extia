const Participant = require('../models/participant');
const bcrypt = require('bcryptjs');

//todo : display json message into postman after request launching
//todo : signup with account checking  / connexion / disconnection
//todo : send mail
//todo : validate email | npm install express-validator

exports.getAllParticipant= async(req, res, next) => {
    const participants = await Participant.find()
        .then(participants => res.status(200).json(participants))
        .catch(error => res.status(501).json({error}));
}

exports.deleteParticipant=async(req, res, next) => {
    console.log("delete participant");
    await Participant.deleteOne({id:req.params.id})
        .then(() => res.status(204).json({ message: 'participant deleted !'}))
        .catch(error => res.status(501).json({ error }));
}

exports.createParticipant=async(req, res, next) => {
    console.log("create participant");
    const participant = await new Participant(req.body);
    participant.save()
        .then(() => res.status(201).json({ message: 'participant created !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.getParticipantById=async(req, res) => {
    console.log("get participant by id");
    try{
        const participant=await Participant.findOne({id:req.params.id});
        if (participant){
            return res.status(200).json(participant);
        }
        res.status(404).json({ message: 'participant not found !'})
    } catch(error){
        res.status(501).json({ message : error.message })
    }
}

exports.updateParticipantById= async(req, res) => {
    console.log("update participant by id");
    const participant =await Participant.updateOne({id:req.params.id}, req.body)
        .then(()=> res.status(201).json({ message: 'participant up-to-date  !'}))
        .catch(error => res.status(501).json({ error }));
}
exports.updatePartParticipantById=async(req, res) => {
    const participant=await Participant.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((participant) => {
        if (!participant ) {
            return res.status(404).send();
        }
        res.send(participant);
    }).catch((error) => {
        res.status(501).json({message : error.message});
    })
}