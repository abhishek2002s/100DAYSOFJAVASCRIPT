
//named IIFE;
(function chai(){
    console.log(`DB CONNECTED`);
})();

//Unamed IIFE;

( (name) => {
 console.log(`chai or code ${name}`);
})('abhi');

