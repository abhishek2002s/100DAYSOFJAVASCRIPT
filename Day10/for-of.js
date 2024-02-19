//for of

// ["","",""]
// [{},{},{}]

//for of is used for array 
const arr = [1,2,3,54,6];

for(const num of arr){
    console.log(num);
}

const greeting = "Hello world!";
for(const greet of greeting){
    if(greet == " ")
    continue;
    console.log('Each character is',greet);
}

//Maps creation

const map = new Map()
map.set('In',"india");
map.set('USA',"United State of America");
map.set('Fr',"France");
console.log(map);

for (const [key,value] of map) {
     console.log(key,':-',value);
}


//object is not iterable usign for of loop
// const myObject = {
//     'game1' :'BGMI',
//     'game2' :'COD'
// };

// // for(const [key,value] of myObject){
// //     console.log(key);
// // }