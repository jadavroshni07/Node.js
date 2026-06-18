/*Write a JSON object which contains array of 3 object.
each object contains 2 properties a Name and an Age.
now sort an array values by Age an decending order.
print Name and Age in terminal as per the shorted Age  */
const student=[
    {
        name:"NAS",
        age:25
    },
    {
        name:"JRR",
        age:27
    },
    {
        name:"CKH",
        age:19
    },
]
const a = student.sort((a,b)=>b.age-a.age)
for(x of a)//reached at the key/element
{
    console.log(x.name+"-"+x.age)
}

