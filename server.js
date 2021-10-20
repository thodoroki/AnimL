const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
<<<<<<< HEAD
const uri = "";
=======
const uri = "mongodb+srv://animebd:animebd@cluster0.0oswo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
>>>>>>> 4209f540a1e6c82e949fcb3fcf429ddc739b2ccb

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