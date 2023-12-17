let a=10
const b= 20
var c= 30 

if(true){
    let a=10 
    const b= 20
    var c= 30 // we should not use var as it does not follow scope rule  
}

// console.log(a)
// console.log(b)
console.log(c)

if(true){
    const username = "Shubham"
    if(username === "Shubham"){
        const surname = " Tiwari"
        console.log(username + surname)
    }
    // console.log(surname)
}
// console.log(username)