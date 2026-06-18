var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plan'});//-->text/html=MIME
    res.write("<h1>hello<h1>");//if you want to send only one response the only print res.end("hello")
    res.end();
    // res.write("hello");//if you type res.write after end then error throw ERR_STREAM_WRITE_AFTER_END
}).listen(8000)//random code 4 digit

// MIME type
// 1. text/plan
// 2. text/html
// 3. application/json
// 4. image/jpeg
// 5. image/png