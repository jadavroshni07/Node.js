/*From JSON object fatch the value as asked */
const a={
    'DataStructure':
    [{
        //index[0]
        'Name':'tree',//a.DataStructure[0].Name
        'course':'intro',//a.DataStructure[0].course
        'content':['1','B','C']//a.DataStructure[0].content
    },
    {
        //index[1]
        'Name':'tree1',//a.DataStructure[1].Name
        'course':'intro',//a.DataStructure[1].course
        'content':['1','B','C','d']//a.DataStructure[1].content
    }
    ],
    'XYZ':
    {
        'Name':'Graphics',//a.XYZ.Name
        'Topic':["BFS","CDF","sort"]//a.XYZ.Topic
    }
}
console.log(a.DataStructure[1].content)