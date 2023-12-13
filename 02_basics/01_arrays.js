const myArray = [0,6,12,45,7,1,34]
const myHeroes= ["ironman","hulk","spiderman"]

const myarr2 = new Array(2,4,6,8,10,12)
//console.log(myArray[0])
//`${myarr2} 3rd array ${myHeroes} 2nd array ${myArray} 1st array`


// many methods of array like push pop shift unshift // includes , indexof

const newArr = myHeroes.join()
// console.log(myHeroes)
// console.log(newArr)
// console.log(typeof newArr)

// slice splice methods 
console.log("A", myarr2)
const nArr1 =  myarr2.slice(1,4)
console.log(nArr1)
console.log("B",myarr2)
const nArr2 = myarr2.splice(2,4)
console.log(nArr2)
console.log("C", myarr2)