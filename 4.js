/*write a function name firstlast that takes an array and return an object 
with below condition.
1. The first element of an array must be an objects key
2. The last element of an array must be a keys value 
like input=["a","b","c","d"]
     output=[a:"d"] */

function FirstLast(a){
    var temp={};
    temp[a[0]]=a[a.length-1]
    return temp;
}
var data = ['abc','def','ghi','jkl']
console.log(FirstLast(data));