const express = require('express');
const router = require('./routes');
require ('dotenv').config();
const dbConfig = require('./backend/dbConfig');
const cors = require('cors');
const app = express();
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/api',router);
const PORT = 5000;

app.listen(PORT,()=>
{
    console.log(`server running in port ${PORT}`);
    console.log('msg');
})


