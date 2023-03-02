const mongoose=require('mongoose');
const Comment = require("../models/comment");

const Schema = mongoose.Schema;
const companySchema=new Schema({
    name:{type : String , required: true},
    logo:{type : String , required: true},
    mark:{type : Number , required: true},
    address:{
        street:{type : String , required: true},
        house:{type : String , required: true},
        city:{type : String , required: true},
    }

});
module.exports=mongoose.model('Company',companySchema);

/*
/*,
    comment:{
        type: [Schema.Types.ObjectId],
        ref: 'Comment'

}*/
