const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    email : {
        type: String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Boolean,
        default : false
        
    }
    
})

const customerModel = mongoose.model('customers',customerSchema);
module.exports = customerModel;