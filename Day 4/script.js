//"use strict";
x=9;
console.log(x);



function outer(){
    let name="tamil";
    
    function inner(){
        console.log("hello"+name);
    }
    return inner;
}
let abc=outer();
abc(); 

console.log("first");
setTimeout(()=>{
    console.log("second,settime");
},2000);
console.log("end");


console.log("first");
setInterval(()=>{
    console.log("second,settime");
},2000);
console.log("end");