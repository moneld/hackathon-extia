const mongoose=require('mongoose');

const Schema = mongoose.Schema;
const companySchema=new Schema({
    name:{type : String , required: true},
    logo:{type : String , required: true},
    mark:{type : Number , required: true}

});
module.exports=mongoose.model('Company',companySchema);