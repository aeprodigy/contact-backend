const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config()

const app = express();//app initialized.

//this should be put into an env file
const PORT = process.env.PORT || 5000;//the port number


app.use(express.json())//helps provide a parser || //parse data from the client and convert it to a json
app.use('/api/contacts',require("./routes/contactRoutes"))
//error handler from the middleware
app.use(errorHandler);

//we listen to the server
app.listen(PORT,()=>{
console.log(`listening to PORT ${PORT}`)
});

