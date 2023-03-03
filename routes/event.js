const express = require('express');
const router = express.Router();

const eventCtrl = require('../controllers/event');

router.post('/create',eventCtrl.createEvent);
router.get('/all',eventCtrl.getAllEvent);

module.exports = router;