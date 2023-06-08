const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const router = require('./src/routes/api.js');

//security middleware import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongosanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');


//security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongosanitize());
app.use(hpp());

//app.use(express.json())
app.use(bodyParser.json());

//Request rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

//MongoDB Database Connection
let URI ="mongodb://localhost:27017/Productions";
let OPTION ={user:"",pass:""};
mongoose.connect(URI,OPTION).then((res)=>{
    console.log("Database connection success")
}).catch((error)=>{
    console.log(error);
})


app.use("/api/v1",router);

//undefine route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",message:"page not found"});
})

module.exports =app;