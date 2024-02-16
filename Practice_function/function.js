 function sayName(){
    console.log("HEllo")
 
};

sayName(); //output  = hello

//function two add two number
function addTwoNumber(num1,num2){
    let result =  num1+num2;
    return result;
}
// console.log(addTwoNumber(5,7));

//ex::2
function loginUserMessage(username = "sam"){
if(!username) //username == undefined
    {
         console.log("please enter a username");
         return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());


function calculateCartPrice(value1 ,valu2 ,...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,600,677,789,544))


// const user = {
//     username : "abhishek",
//     price:199
// }

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}` );
    {anyobject.price};
}

// handleObject(user);

// pass direct object into the function

handleObject({
    username:"abhi",
    price:98
})

//pass array in the function

const myArray = [200,400,500];
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,500,600]))

