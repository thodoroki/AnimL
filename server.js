const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const uri = "";


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

app.get('/home', function(req,res){
    res.json({message:'hello world'});
});

app.listen(port, function(){
    console.log(`Server runing on port ${ port }`);
});
