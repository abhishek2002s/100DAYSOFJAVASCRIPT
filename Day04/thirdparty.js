// let msg = "hello i am third party";

// function show(){
//  console.log(msg);
// }
//   show();

//it wiill show a error of redeclartion of variable name

//we fill fix it with the help of anonymous function and function immediately invoked 

(
    function ()
    {
        let msg = "hello i am third party";

      function show(){
       console.log(msg);
     }
        show();
})();