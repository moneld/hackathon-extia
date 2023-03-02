const express = require('express');
const router = express.Router();

const UserCtrl = require('../controllers/user');

router.get('/create',UserCtrl.createUser);
router.get('/all',UserCtrl.getAllUser);
router.delete('/delete/:id',UserCtrl.deleteUser);
router.get('/:id',UserCtrl.getUserById);
router.put('/update/:id',UserCtrl.updateUserById);
router.patch('/update-part/:id',UserCtrl.updateUserById);
module.exports = router;