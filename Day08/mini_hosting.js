function one(){
    const userName = "abhi";

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    two();
}

one();

if(true) {
    const userName = "abhishek"
    if(userName === "abhishek"){
        const website = " youtube"
        console.log(userName + website);
    }

    // console.log(website);
}

// console.log(userName);

// ********* intresting  *****************

console.log(addOne(5));
function addOne(num){
    return num +1;
}


// console.log(addTwo(5)); // it will create a error  because  we  are  not  passing  any  arguments  to  the   function const number
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5))