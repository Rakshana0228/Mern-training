let a;
function greet() {
    console.log("hello");
}

function add(a, callback) {
    console.log(a);
    callback();
}
add(5,greet);





let abc = new Set([1, 6, 9, 5, 7, 8, 28, 6, 6]); 
console.log(abc);            

abc.add(99);                  
abc.delete(99);              
console.log(abc.has(99));     

abc.clear();                  
console.log(abc.size);  

//destrcting
let xy=["grape","choc","apple"];
let [d,e,f]=xy;
console.log(d,e);


//spreading
let arr1=[3,7,8,9];
let arr2=[...arr1,4,7,3];
console.log(arr2);