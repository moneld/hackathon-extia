const Comment = require('../models/comment');

//todo: liste des utilisateurs ayant participe au meet

exports.createComment=async(req, res, next) => {

    //console.log("create comment");
    /*console.log("idComp:"+req.query.idComp);
    console.log("comment:"+req.body.comment);
    console.log("note:"+req.body.note);*/
    /*const comment = await new Comment(req.body);
    comment.save()
        .then(() => res.status(201).json({ message: 'comment created !'}))
        .catch(error => res.status(400).json({ error }));
*/
}
exports.getAllComment= async(req, res, next) => {

  /*  const comments = await Comment.find()
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(501).json({error}));*/
}
