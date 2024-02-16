
// var c = 300;
//global scope
let a =300;
if (true){
    //local scope
    let a = 10;
    const b = 20;  
    console.log("Inner : ",a);
}

console.log(a);
// console.log(b);
// console.log(c);