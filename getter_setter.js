var person = {
    name: "abhishek",
    age:25,

    get getname(){
        return this.name.toUpperCase();
    },

    // set setname(n){
    //     this.name = n.toUpperCase();
    // } // set the name in the object
};
// person.name = "soni";

// person.setname = "abhi";
console.log(person.getname);


