// 1. create one page with 2 links Home(/) and About(/about) 
// 2. both pages must contains html content and add require contain 
// 3. if user add  any other url path , 
// then he/she redirected to page and plan msg will be display of page not found
var http = require('http');
http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>hello<h1>");
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>About page<h1>");
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write("page not found")
        res.end();
    }
    a
}).listen(5025)
console.log("thanks")