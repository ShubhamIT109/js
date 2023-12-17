//Immediately invoked function expressions(iife)

(function chai(){ //named iife
    console.log(`DB Connected`)
})();

((name)=>{
    console.log(`Db 2 Connected ${name}`)
})("shubham");