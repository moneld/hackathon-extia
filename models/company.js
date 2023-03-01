const mongoose=require('mongoose');

const Schema = mongoose.Schema;
const companySchema=new Schema({
    note:{type : Number,required: true},
    content:{type : String , required: true},
});
module.exports=mongoose.model('Company',companySchema);