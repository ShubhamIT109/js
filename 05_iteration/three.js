//for of doesn't work for object key value so we use for in

//for in object ke liye use 
// for of array and map ke liye use

const myObj = {
    cpp : "c++",
    j2se : "java",
    py : "python",
    js : "Java Script"
}
for (const key in myObj) {
    console.log(`${key} is used to denote ${myObj[key]}`)
        
    }
