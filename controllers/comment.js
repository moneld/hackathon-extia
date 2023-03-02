const Comment = require('../models/comment');


exports.getAllComment= async(req, res, next) => {
    const comments = await Comment.find()
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(501).json({error}));
}

exports.deleteComment=async(req, res, next) => {
    console.log("delete comment");
    await Comment.deleteOne({id:req.params.id})
        .then(() => res.status(204).json({ message: 'comment deleted !'}))
        .catch(error => res.status(501).json({ error }));
}

exports.createComment=async(req, res, next) => {
    console.log("create comment");
    const comment = await new Comment(req.body);
    comment.save()
        .then(() => res.status(201).json({ message: 'comment created !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.getAllCommentUserId=async(req, res) => {
    console.log("get all comments by user id");
    try{
        const comment=await Comment.findOne({id:req.params.id});
        if (comment){
            return res.status(200).json(comment);
        }
        res.status(404).json({ message: 'comment not found !'})
    } catch(error){
        res.status(501).json({ message : error.message })
    }
}
//todo: modifier commentaire
/*
exports.updateCommentById= async(req, res) => {
    console.log("update user by id");
    const user=await User.updateOne({id:req.params.id}, req.body)
        .then(()=> res.status(201).json({ message: 'user up-to-date  !'}))
        .catch(error => res.status(501).json({ error }));
}
*/
/*
exports.updatePartUserById=async(req, res) => {
    const user=await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    }).catch((error) => {
        res.status(501).json({message : error.message});
    })
}
*/