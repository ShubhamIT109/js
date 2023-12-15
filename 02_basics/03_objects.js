//singelton //object jiska ek he  instance hoga aur ye jb bnta hai jb hum constructor se banaye 
//Object.create

//Object Literals //isme multiple instance ho skte hai//key value pair

const mySymbol = Symbol("key1") // Symbol declaration
const JsUser = {
    name : "shubham",
    "full name": "Shubham Tiwari",
    [mySymbol] : "mykey1",
    age : 23,
    location : "bhopal",
    email : "shubham@gmail.com",
    IsLogin : false,
    LastLoginDays : ["Monday","Satuarday"]
}

// 2 ways to Access object but prefer to use second one 
console.log(JsUser.name)//1
console.log(JsUser["name"])//2
console.log(JsUser["full name"])// we cannot access full name with first method
console.log(JsUser[mySymbol])

JsUser.age = 22 // to change object value
//Object.freeze(JsUser) // to stop any more changes 
//JsUser.age = 33 

// console.log(JsUser)
JsUser.greeting = function(){
    console.log("Hello JsUser ")
}
//console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, welcome ${this.name}`)
}
console.log(JsUser.greetingTwo())