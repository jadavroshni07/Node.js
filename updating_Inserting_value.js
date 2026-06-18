// updating value of existing(keys/object)
// 1st method
let person = {
    name:"fsd",
    age:22,
    city:"Rajkot"
}
person.age=30;
console.log(person)


//2nd method
let person1 = {
    name:"fsd",
    age:22,
    city:"Rajkot"
}
person1["city"]="ahmedabad";
console.log(person1)

//3rd method
let person2 = {
    name:"fsd",
    age:22,
    city:"Rajkot"
}
let key="name"
person2[key]="python";
console.log(person2)

//insert new value
let person3 = {
    name:"fsd",
    age:22,
    city:"Rajkot"
}
person3.marks=25;
console.log(person3)
