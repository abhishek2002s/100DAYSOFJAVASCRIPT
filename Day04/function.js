// inbuilt function or pre-defined function
// alert();
// prompt();

//user defined function::
//function define
function mulTable(num) //parameter
{
    for(i=1;i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`);
        
    }

}

//function call;
mulTable(5);//argument
console.log("\n");
mulTable(4);


//sum of two number function::
function add(num1,num2){
    console.log(`Sum of two number is = ${num1+ num2}`);
}

add(5,7);
//argument object::

//sum of all number using argument object
function sum(){
   if(arguments.length==0){
    console.log("No parameter passed !");
   }
   else{
    let sum =0
    for(let i=0;i<arguments.length;i++){
        sum = sum + arguments[i];
    }
    console.log(sum);
   }
}

let addition = sum;
addition(5,2);
sum(5,7,8,9);