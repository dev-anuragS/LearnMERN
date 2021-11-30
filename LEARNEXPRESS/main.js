const express = require('express');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("WELCOME");
});

app.get('/calculator',(req,res)=>{
    res.sendFile(__dirname+`/calculator.html`);
});

app.post('/calculator',(req,res)=>{
    
    let n1=Number(req.body.v1);
    let n2=Number(req.body.v2);

    let sum=n1+n2;
    
    res.send(`${sum}`);

});

app.listen(3000,(req,res)=>{
    console.log(`listening on port 3000`);
});