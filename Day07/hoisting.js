// "use strict" // if use strict then delcaration must  be  at  the  beginning;
//this will not show a error beacuse of hoisitng
//hoisting is mean to pull the  declaration  up  to  the  top according to scope of the declaaration;


//hoisting support in var,let ,cont but difference is var is automatically pull to top while other are not automatically pull to top thats why we assign the other varible to top;
hello();


function hello(){
    console.log("hello world");
}


//hoisting in varible
//hosting assing  value  undifined  for  variable   and  then  assign; 
var x;// delcare
console.log(x);
//output is undefined
x =7;

//strict mode on "strict mode at the top of the sript "
//if you dont declare the varible then it show an error;
y =4;
console.log(y);
