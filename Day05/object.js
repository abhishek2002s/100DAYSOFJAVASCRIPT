//**** an object have properties and methods or function *****

//object creation
let person = {
firstName : "abhishek",
lastName : "soni",
};

// console.log(person['lastName']); // soni
// console.log(person["first Name"]); // abhishek if sapce is palce between (first Name)
console.log(person.firstName);

// to add new property in the object
person.age =25;


// //modify
// person.firstName = 'rahul';
// console.log(person);

// //delete particular element in the object
// delete person.age;
// console.log(person);


// //to check whether the given element is present int the object or not
// console.log('height' in person)

//to iterate all the element in the object using loop

for(let key in person){
    console.log(key + ":" + person[key]);
}
//firstName:abhishek
//lastName:soni
//age:25