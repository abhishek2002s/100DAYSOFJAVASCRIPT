const user = {
    userName : "abhishek",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName},welcome to website`);
        console.log(this);
    },

};

user.welcomeMessage();
user.userName = "sam";
user.welcomeMessage();

console.log(this);
function hello(){
    let userName = "abhi";
console.log(this);
}
hello();


//arrow function *************
const chai = () => {
    let user = "aksoni";
    console.log(this);
}
chai();

//way 1 if you use curly braces then return must while open closed braces use then return not must
// const addTwo = (num1,num2) =>  num1 + num2;
//way 2 
// const addTwo = (num1,num2) =>  (num1 + num2);
// console.log(addTwo(3,4));

