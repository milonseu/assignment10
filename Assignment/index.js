const app = require('./app');
const dotenv= require('dotenv');
dotenv.config({path:"./config.env"})
const Port =process.env.PORT;

app.listen(Port,()=>{
    console.log("server run success");
})