const Company = require('../models/company');
const Comment = require("../models/comment");


exports.createCompany=async(req, res, next) => {
    console.log("create Company");
    const company = await new Company(req.body);
    company.save()
        .then(() => res.status(201).json({ message: 'Company created !'}))
        .catch(error => res.status(400).json({ error }));
}


exports.getAllCompany= async(req, res, next) => {
    console.log("get all company");
    const companies = await Company.find()
        .then(companies => res.status(200).json(companies))
        .catch(error => res.status(501).json({error}));
}
