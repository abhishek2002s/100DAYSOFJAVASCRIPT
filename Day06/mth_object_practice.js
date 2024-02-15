//******* practice time     **********/
// console.log(Math.PI);
// console.log(Math.E); // where e is euler number //


const x = 4.7;
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.trunc(x));

console.log(Math.pow(4,3));
console.log(Math.sqrt(100));

console.log(Math.min(12,23,45,67,3,-4,1,0));
console.log(Math.max(34,56,76,34,21,34,3,34232,23233,45,4));


//random number generate
console.log(Math.floor(Math.random()*10));// generate number between 0 and 9.
console.log(Math.floor(Math.random()*11));// generate number between 0 and 10.
console.log(Math.floor(Math.random()*100));// generate number between 0 and 10.


console.log(Math.floor(Math.random())*10)+1; // generate numbre between 1 and 10;

//when ragne is given (eg. number betweeen 23  to  not include 35)

// function getRandom(min,max){
// let x = Math.floor(Math.random() * (max-min))+min;
// return x;
// }

// console.log(getRandom(10,20));

//if you include number to 20 generte random number between 10 to equal to20
function getRandom(min,max){
    let x = Math.floor(Math.random() * (max-min +1))+min;
    return x;
    } 
console.log(getRandom(10,20));