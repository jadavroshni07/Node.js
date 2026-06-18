// write a code to fetch the valueof keys and a print a sentance as
// "Hi ! we are Student of semeter 4 of CSE branch"
const a= {
    "A":"LJU",
    "B":["CSE","IT","CE"],
    "C":[{
        "D":"Hi",
        "E":['are',4,{'F':['semester','we']}]
    }],
    "G":{
        "H":"Students",
        "I":["of","!"]
    },
    "J":[{
        "k":"python",
        "L":"branch"},
        "FSD-2"
    ]
} 
console.log(a.C[0].D+" "+
    a.G.I[1]+" "+
    a.C[0].E[2].F[1]+" "+
    a.G.H+" "+
    a.G.I[0]+" "+
    a.C[0].E[2].F[0]+" "+
    a.C[0].E[1]+" "+
    a.G.I[0]+" "+
    a.B[0]+" "+
    a.J[0].L)