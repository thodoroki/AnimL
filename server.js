const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes')

const app = express();
const port = process.env.PORT || 5000;
const uri = "mongodb+srv://animebd:animebd@cluster0.0oswo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser:true,
}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(console.log('Mongodb conectado com sucesso!'))
    }
})


app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(routes)

app.listen(port, function(){
    console.log(`Server runing on port ${ port }`);
});