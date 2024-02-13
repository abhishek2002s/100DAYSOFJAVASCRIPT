//return a function:: 
//defualt value of return function is undefined;
function add(a,b){
    return a+b;
}

let c = add(5,6);
console.log(c);

//function to find greater between two numer
function compare(x,y)
{
    if(x>y){
        return x;
    }
    else if(x<y){
        return y;
    }
    else{
        return "none of them , they are equal";
    }
}

let res = compare(3,3);
console.log(`The greater number  is ${res}`);