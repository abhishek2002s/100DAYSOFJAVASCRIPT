//Immediately invoked function ;

//Immediately invoked function is a function  that  is  called  immediately  after  it   

(function(){
console.log("Hello world");
console.log("kaise ho sare");
})(); 

//function multiplication table using invoked function;
(function(x){
    for(i=1;i<=10;i++)
    {
console.log(` ${x} x ${i} = ${x*i}`);
    }
})(5); 
