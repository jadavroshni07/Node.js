var u = require("url")
var addr="https://user:123@video.co:8000/videoplay?doc=-ol&ln=em#hello"
process.noDeprecation=true;
var q=u.parse(addr,true);//true->> quary string parsed
console.log(q)