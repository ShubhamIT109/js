const  marvel = ['ironman','hulk','thor']
const dc = ['superman','batman','flash']

//marvel.push(dc)
//console.log(marvel)
// const allHeros = marvel.concat(dc)
// console.log(allHeros)
const allNewHeros = [...marvel , ...dc]
console.log(allNewHeros)

// flat function  is used combine or get data of array in which array inside another array is

console.log(Array.from("shubham"))