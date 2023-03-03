const express = require('express');
const router = express.Router();

const UserCtrl = require('../controllers/user');

router.post('/create',UserCtrl.createUser);
router.get('/all',UserCtrl.getAllUser);
router.get('/getOne/:id',UserCtrl.getUserById);
/*
router.delete('/delete/:id',UserCtrl.deleteUser);
router.put('/update/:id',UserCtrl.updateUserById);
router.patch('/update-part/:id',UserCtrl.updateUserById);*/
module.exports = router;