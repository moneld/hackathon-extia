const mongoose=require('mongoose');

const Schema = mongoose.Schema;
const missionSchema=new Schema({
    title:{type : String , required: true},
    startDate:{type : Date , required: true},
    endDate:{type : Date , required: true},
    comment:{type : String , required: true},
    skill:{type : [String] , required: true},

});
module.exports=mongoose.model('Mission',missionSchema);