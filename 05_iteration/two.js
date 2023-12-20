// for of

const arr1 = [1,2,3,4,5,6]

for (const num of arr1) {
    // console.log(`my num are : ${num}`)
}
const name = "Shubham Tiwari"
for (const n of name) {
    if(n == " "){
        continue
    }
    //  console.log(n)
}

// map

const map = new Map()
map.set('In',"India")
map.set('Fr',"France")
map.set('Aus',"Australia")

//console.log(map)

for (const [key,value] of map) {
    console.log(`${key} :- ${value}`)
}