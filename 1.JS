var a={
    "name":"abc",
    "age":25
}
console.log(a);

//run json file with using js file
const data=require("./1.json")
console.log(data)

/*convert string into object*/
// JSON.parse()
let obj=JSON.parse('{"var1":"LJ", "var2":"University" }');
console.log(obj);
console.log(obj.var1+" "+obj.var2)//

let obj1=('{"var1":"LJ", "var2":"University" }');
console.log(obj1);
console.log(obj1.var1+" "+obj1.var2)


/*Convert object into String */
// JSON.stringify()
let obj2=JSON.stringify({
        var3:"LJ",
        var4:"University"
    })
    
let update=JSON.parse(obj2)
console.log(obj2)
    console.log(update.var3+" "+update.var4)


/*undefined */
// var a=JSON.parse('{"name":undefined}')
// console.log(a)


/*Date */
// let data2 = JSON.parse('{"name":"fsd","DOB":new Date()}')
// console.log(data2)