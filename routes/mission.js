const express = require('express');
const router = express.Router();

const missionCtrl = require('../controllers/mission');
router.post('/create',missionCtrl.createMission);
router.get('/all',missionCtrl.getAllMission);
router.get('/getOne/:id',missionCtrl.getMissionById);
/*
router.delete('/delete/:id',userCtrl.deleteUser);
router.put('/update/:id',userCtrl.updateUserById);
router.patch('/update-part/:id',userCtrl.updateUserById);*/
module.exports = router;