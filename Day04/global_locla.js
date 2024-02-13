//global variable used within the scope and outside the scope 
//local variable used only wihtin in the scope

let car = "Audi"; // global varible
function summation(){

    let num1 = 5; // local variable 
    console.log(num1);
    console.log(car); // global varibale access

}

summation();
console.log(car);
// console.log(num1); // it will show a local scope error
