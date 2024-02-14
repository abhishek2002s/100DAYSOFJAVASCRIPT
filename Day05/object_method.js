let person = {
    firstName : "abhishek",
    //third way
    sayHello: function (){
    console.log("Hello !")
          }
    };
     
    // first method
      person.sayHello = function (){
            console.log("Hello !")
          }

person.sayHello();
// second way

function greet(){
        console.log("hello !")
    }
    
    person.sayHello = greet;
    person.sayHello();
    
    //forth way ****
    let person = {
        firstName : "abhishek",
        lastName : "soni",
        sayHello (){
            console.log("Hello !")
    }
};
person.sayHello();

