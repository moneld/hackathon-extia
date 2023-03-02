const Company = require('../models/company');


exports.getAllCompany= async(req, res, next) => {
    /*const Companys = await Company.find()
        .then(Companys => res.status(200).json(Companys))
        .catch(error => res.status(501).json({error}));*/
}

exports.deleteCompany=async(req, res, next) => {
    /*console.log("delete Company");
    await Company.deleteOne({id:req.params.id})
        .then(() => res.status(204).json({ message: 'Company deleted !'}))
        .catch(error => res.status(501).json({ error }));*/
}

exports.createCompany=async(req, res, next) => {
    /*
    console.log("create Company");
    const Company = await new Company(req.body);
    Company.save()
        .then(() => res.status(201).json({ message: 'Company created !'}))
        .catch(error => res.status(400).json({ error }));*/
}

exports.getAllCompanyById=async(req, res) => {

    /*console.log("get all Companys by user id");
    try{
        const Company=await Company.findOne({id:req.params.id});
        if (Company){
            return res.status(200).json(Company);
        }
        res.status(404).json({ message: 'Company not found !'})
    } catch(error){
        res.status(501).json({ message : error.message })
    }*/
}

exports.getCompanyById=async(req, res) => {

    /*console.log("get all Companys by user id");
    try{
        const Company=await Company.findOne({id:req.params.id});
        if (Company){
            return res.status(200).json(Company);
        }
        res.status(404).json({ message: 'Company not found !'})
    } catch(error){
        res.status(501).json({ message : error.message })
    }*/
}

exports.updateCompanyById=async(req, res) => {

    /*console.log("get all Companys by user id");
    try{
        const Company=await Company.findOne({id:req.params.id});
        if (Company){
            return res.status(200).json(Company);
        }
        res.status(404).json({ message: 'Company not found !'})
    } catch(error){
        res.status(501).json({ message : error.message })
    }*/
}