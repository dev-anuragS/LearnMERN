const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const home=fs.readFileSync('learn node.js\\learnjs_Custombackend\\home.html');
const about=fs.readFileSync('learn node.js\\learnjs_Custombackend\\about.html');
const services=fs.readFileSync(`learn node.js\\learnjs_Custombackend\\services.html`);


const server = http.createServer((req,res)=>{

    console.log(req.url);
    url=req.url;

    res.statusCode=200;
    res.setHeader("Content-Type",'text/html');

    if(url=='/'||url=='/home.html'){
        res.end(home);
    }
    else if(url=='/about.html'){
        res.end(about);
    }
    else if(url=='/services.html'){
        res.end(services);
    }
    else{
        res.end("ERROR 404");
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
