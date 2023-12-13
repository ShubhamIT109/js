let mydate = new Date()
// console.log(mydate.toDateString())

let newdate = new Date()
// console.log(newdate)
// console.log(newdate.getMonth)
// console.log(newdate.getDay)

//`${newdate.getDate} today date and month is ${newdate.getMonth()} and day is${newdate.getDay()}`
newdate.toLocaleString('default',{
    weekday:"long"
    
})