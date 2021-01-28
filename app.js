const http=require('http');
const express=require('express');
const app=express();

app.use(express.static(__dirname+'/'));

app.get('/',(req,res) =>{
    res.render('index.html');
});

app.listen(3000);