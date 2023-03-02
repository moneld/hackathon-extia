const mongoose=require('mongoose');

const Schema = mongoose.Schema;
const missionSchema=new Schema({
    title:{type : String , required: true},
    startDate:{type : Date , required: true},
    endDate:{type : Date , required: true},
    skill:{type : [String] , required: true},
    company:{
        id:{type : String , required: true},
        name:{type : String , required: true},
        address:{type : String , required: true},
    }



});
module.exports=mongoose.model('Mission',missionSchema);