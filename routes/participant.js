const express = require('express');
const router = express.Router();

const ParticipantCtrl = require('../controllers/participant');

router.get('/all',ParticipantCtrl.getAllParticipant);
router.delete('/delete/:id',ParticipantCtrl.deleteParticipant);
router.get('/:id',ParticipantCtrl.getParticipantById);
router.put('/update/:id',ParticipantCtrl.updateParticipantById);
router.patch('/update-part/:id',ParticipantCtrl.updatePartParticipantById);
module.exports = router;