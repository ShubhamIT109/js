function sayMyName(){
console.log("s")
console.log("h")
console.log("u")
console.log("b")
console.log("h")
console.log("a")
console.log("m")
}

// sayMyName()

function addTwoNumber(number1 ,number2){
return number1+number2
}

let result = addTwoNumber(3,5)
// console.log("Result :",result)

function userLoginMessage(username){
    return `${username} welcome to my page`
}
console.log(userLoginMessage("shubham"))

function addCartItem(num1,num2,...value1){ //... is used to denote as rest and spread both 
      return value1
}
console.log(addCartItem(100,34,29,59))

const myObject ={
    coursename : "java",
    price:2000,
    duration:6
}

function objexp(obj1){
console.log(`Course Name is ${obj1.coursename} and duration of course is ${obj1.duration} and it will cost ${obj1.price} `)
}

objexp(myObject)

const myArray = [100,7768,2778,2989]

function arrexp(arr1){
console.log(arr1[1])
}
arrexp(myArray)