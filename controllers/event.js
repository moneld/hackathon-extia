const Event = require('../models/event');



exports.createEvent=async(req, res, next) => {

    console.log(req.body);
    const event = await new Event(req.body);
    event.save()
        .then(() => res.status(201).json({ message: 'event created !'}))
        .catch(error => res.status(400).json({ error }));

}
exports.getAllEvent= async(req, res, next) => {

    const events = await Event.find()
        .then(events => res.status(200).json(events))
        .catch(error => res.status(501).json({error}));
}