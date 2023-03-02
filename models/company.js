const mongoose=require('mongoose');
const Comment = require("../models/comment");

const Schema = mongoose.Schema;
const companySchema=new Schema({
    name:{type : String , required: true},
    logo:{type : String , required: true},
    mark:{type : Number , required: true},
    comment:{
        type: [Schema.Types.ObjectId],
        ref: 'Comment'

    }

});
module.exports=mongoose.model('Company',companySchema);