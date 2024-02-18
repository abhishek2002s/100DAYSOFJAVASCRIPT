//Control flow

//if

// const isUserLoggedIn = true
// const temperature = 50
// if(temperature<50){
//  console.log("less than 50");
// }

// else if(temperature == 50){
//     console.log("equal");
// }
// else{
//     console.log("temperature greater fifteen");
// }

// const score = 200;
// if(score > 100) {
//     const power = "fly";
//     console.log(`User Power:${power}`);
// }

// // console.log(`user power : ${power}`);


const balance = 800;
if(balance > 500) console.log("test");
console.log("test2");


// const age = prompt("Enter your age");
// const age =  34;
// if(age < 18){
//     console.log("not able to vote");
// }
// else if(age >= 18  && age <= 64){
//     console.log("able to vote");
// }
// else{
//     console.log("age equal to 18");
// }




// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if(userLoggedIn && debitCard){
//     console.log("allow user to buy course");
// }
// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("user logged In");
// }

//switch statement
const month = "march";
switch (month){
    case "jan":
        console.log("january");
    break;
    case "feb":
        console.log("Febuary");
    break;
    case "march":
        console.log("March");
    break;
    case "april":
        console.log("Aprail");
    break;

    default:
        console.log("default score given");       
}

//nullish Coalescibng operator(?): null undefined

let val1;
// val1 = 5?? 10; // output = 5

// val1 = null ?? 10;  output = 10
val1 = undefined ?? 15 ?? 10 // output = 15

console.log(val1);


//ternary operator 

// condition ? true : false;

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");