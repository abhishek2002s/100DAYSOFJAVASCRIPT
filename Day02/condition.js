let age = 18;

//if else ,if else if condition statement 
if(age>=18)
{
 console.log("You can vote");
}
else if(age<18 && age>0)
{
    console.log("You can aplly for your voter id card at age 18");
}
else{
    console.log("you are not elegible");
}

//ternary operator
let isLoggedIn=0;//if 0 loggedout if 1 login

// if(isLoggedIn == 0){
//     console.log("Login");
// }
// else{
//     console.log("Out");
// }

//using ternary opeartor
let ans = (isLoggedIn==0) ? "Login" : "Logout";
console.log(ans);

//nullish  coalescing operator ??
let user;
// user = "abhi";
console(user ?? "Guest User")
