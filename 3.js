/*write one JSON string with date property(yyyy-mm-dd)
and print date in indian standard time

for this example user want to fatch the data ...so we need to define object but ...
first of all we need to use JSON.parse() method 
to convert string to object*/
const obj=JSON.parse('{"name":"abc","dob":"1994-04-30"}');
console.log(obj.dob)
var a=new Date(obj.dob);
console.log(a)
