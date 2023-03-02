const express = require('express');
const router = express.Router();

const companyCtrl = require('../controllers/company');

router.post('/create',companyCtrl.createCompany);
router.get('/all',companyCtrl.getAllCompany);
router.delete('/delete/:id',companyCtrl.deleteCompany);
router.get('/:id',companyCtrl.getCompanyById);
router.put('/update/:id',companyCtrl.updateCompanyById);
router.patch('/update-part/:id',companyCtrl.updateCompanyById);
module.exports = router;