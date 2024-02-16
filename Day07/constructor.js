// var student1= {
//     fisrtName : "abhihshek",
//     lastNAme : "soni",
//     age : 25,
//     class: 5
// }

// //constructor function
// function Student(first,last,age,clas){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = clas;
// }

// var student1 = new Student("abhishek","soni",25,5);
// // var student2 = new Student("rahul","soni",25,5);
// // var student3 = new Student("abhi","soni",25,5);
// // console.log(student1,student2,student3);

// student1.nationality = "Indian"; // add object in the partiuclar object not add an constructor function
// console.log(student1);


// // add function in the object ***
// student1.name = function(){
//     return this.firstName+ " "+this.lastName;
// }
// console.log(student1.name);


//**** */ add element to the constructor function(prototype method)
function Student(first,last,age,clas){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = clas;
}

//prototype is a super class where all the class inherited from  it;
Student.prototype.nationality = "Indian";
Student.prototype.name   = function(){
        return this.firstName+ " "+this.lastName;
     }
 
    var student1 = new Student("abhishek","soni",25,5);
var student2 = new Student("rahul","soni",25,5);

console.log(student1.nationality);
console.log(student1.name());