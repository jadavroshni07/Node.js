// write node js program to parse a url and calculate the average of 3 numbers passed as query parameter
var url=require('url');
process.noDeprecation=true;
var addr="https://localhost:8080/test?m1=50&m2=60&m3=70";
var q=url.parse(addr,true)//-->if false then op is m1=50&m2=60&m3=70
                          // undefined
                          // NaN
console.log(q.query);
console.log(typeof(q.query.m1));
var m1=parseInt(q.query.m1);
var m2=parseInt(q.query.m2);
var m3=parseInt(q.query.m3);
var avg=((m1+m2+m3)/3)
console.log(avg)