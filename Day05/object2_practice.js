//const tinderUser = new Object() ==> this is a singleton object
const tinderUSer = {}
tinderUSer.id = "123abc";
tinderUSer.name  = "abhihek";
tinderUSer.isLoggedIn = false;

// console.log(tinderUSer);


//nested object
const reugularUser = {
    email : "xyz@gamil.com",
    fullname : {
        userfullName : {
            firstName : "abhi",
            lastName  : "soni"
        },
    },
};

console.log(reugularUser.fullname.userfullName.firstName);

//merge two object ;
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"c"};

// const obj3 = Object.assign({},obj1,obj2);\

//spread operator
const obj3 = {...obj1,...obj2};
console.log(obj3);

const users = [
    {
        id :1,
        email:"xyz@gmail.com"
    },
    {
        id :1,
        email:"xyz@gmail.com"
    },
    {
        id :1,
        email:"xyz@gmail.com"
    },
]

console.log(users[1].email); 

console.log(tinderUSer);
console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));

// to check wehter the property given is avialable or Notification;;

console.log(tinderUSer.hasOwnProperty('isLoggedIn'));
// console.log(tinderUSer.hasOwnValue('123abc')); no such method found