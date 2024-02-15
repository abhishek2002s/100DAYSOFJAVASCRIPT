//singleton

//symbol declare
const mysym = Symbol("key1");


//object  literal
const jsUser = {
 firstName:"Abhishek",
 [mysym] : "mykey1",
 lastName: "soni",
 location : "hapur",
 email:"abhi@ gmail.com",
 "isLogged In" : "false",
 lastLoginDays : ["Monday","Staurday"]

};

// console.log(jsUser.email);
console.log(jsUser["isLogged In"]);
console.log(jsUser[mysym]);



jsUser.email = "xyz@gmail.com"
//freeze th object
// Object.freeze(jsUser)
jsUser.email = "xyz@gamil.com"
console.log(jsUser);



jsUser.greeting = function(){
    console.log(`Hello JS user,${this.firstName}`);
}

console.log(jsUser.greeting());



