//*********  array practice  ************
let myArray = [0,12,2,3,4,"true","abhi"];
// console.log(myArray[3]);


// const arr2 = new Array(1,3,4,56,7);
// console.log((arr2));

// console.log(myArray);
// myArray.push("ram ram ji");
// myArray.unshift(28);
// console.log(myArray);
// myArray.pop();
// myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(43)); //output = -1


// const newArray = myArray.join();

// console.log(typeof(newArray));

//slice, splice

//slice doest not include range (its does not manipualte the original array)
//splice include last range (its manipulate the original array)

console.log("A ",myArray);
const myn1 = myArray.slice(1,3);


console.log(myn1);
console.log("B ",myArray);


const myn2 = myArray.splice(1,3);
console.log("C ",myArray);
console.log(myn2);

