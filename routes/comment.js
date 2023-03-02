const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');

router.post('/create',commentCtrl.createComment);
/*router.get('/all',commentCtrl.getAllComment);
router.delete('/delete/:id',commentCtrl.deleteComment);
router.get('/:id',commentCtrl.getAllCommentUserId);
//router.put('/update/:id',commentCtrl.updateUserById);
//router.patch('/update-part/:id',commentCtrl.updateUserById);*/
module.exports = router;