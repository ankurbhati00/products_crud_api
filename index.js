const express = require('express');
const app = express();
const port = 8000;
const db = require('./mongoose/config');
app.use(express.urlencoded());
app.use('/', require('./API/v1/index'));
app.listen(port, (err)=>{

if(err){
    console.log("err in server start..", err);
}

console.log("Server is up on port:", port);


})