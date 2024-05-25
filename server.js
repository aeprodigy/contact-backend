const express = require('express');
const dotenv = require("dotenv").config()

const app = express();//app initialized.

//this should be put into an env file
const PORT = process.env.PORT || 5000;//the port number

app.get('/api/contacts',(req, res)=>{
    res.json({"Contacts":"all"});
})
//we listen to the server
app.listen(PORT,()=>{
console.log(`listening to PORT ${PORT}`)
});

