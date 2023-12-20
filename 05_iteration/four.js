const coding = ["java","python","java script","c++"]

coding.forEach(function (val,index,arr){ //call back function
    // console.log(val,index,arr)
})

coding.forEach((val) => { //arrow function
// console.log(val)
})

const myCod = [
    {subjectName : "java",
     price : 4000},
     {subjectName : "python",
     price : 3000},
     {subjectName : "java Script",
     price : 3500}

]

myCod.forEach((val)=>{
 console.log(val.subjectName)
})