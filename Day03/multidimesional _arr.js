let book = ["Math","Physics","computer","sciience"];

//creating multidimensional array
let bookWithPage = [
    ["Maht","300"],
    ["Physics","500"],
    ["Bio","400"]
];

//Acess multidimensiional array

console.log(bookWithPage[1][0]);// to access particular element output = physics
console.log(bookWithPage[1]);// to access all the element output = ['Physics','500']

// accessing all the element using for loop

// for(let i =0;i<book.length;i++)
// {
//         console.log(`Element ${i} is ${book[i]} \n`);
//     }

//using for each function ==>
book.forEach(myfu);

function myfu(value){
    console.log(value);
}

