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

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()