const { response } = require('express');
const mongoose = require('mongoose');
const mongoDbUriString = process.env.MONGODB_URI_STRING;
mongoose
.connect(mongoDbUriString)
.then((response)=>{
    console.log("ecommerce database connected");
}).catch((err)=>{
console.log("connection error",err);
});