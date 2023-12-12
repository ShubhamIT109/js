const name= "shubham"
const repocount = 50
console.log(name + repocount)
console.log(`my name is ${name} and my repocount is ${repocount}`) // string interpolation

const gameName =  new String('pokemon unite')
console.log(gameName[0])
console.log(gameName.charAt(3))
console.log(gameName.toUpperCase())

const newString =  gameName.substring(0,4);
console.log(newString)
const anotherString = gameName.slice(-5,2)
console.log(anotherString)
//trim replace includes and many methods function are 