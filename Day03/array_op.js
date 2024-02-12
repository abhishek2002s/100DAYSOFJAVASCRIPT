// let book = ["Math","Physcis","Bio","Computer science"];
console.log(book.length);

console.log(book.indexOf("Bio"));


book.push("Hindi"); //add element to array in the end
book.unshift("javascript"); // add element to array in the start position;

book.pop(); // remove element from the last position
book.shift(); // remove element from the first poistion


book.splice(2,1); // to remove a particualr element from the array
   // to delete all element from the array;
   book = [];
console.log(book); 

// join function
console.log(book.join('-'));
let text = "This is a random text";

//split function
let wordarray = text.split(' ');
console.log(Array.isArray(wordarray));
console.log(wordarray)


//merge two array
let book = ["Math","Physcis","Bio","Computer science"];
let book1 = ["hindi","english"];
console.log(book.concat(book1));



