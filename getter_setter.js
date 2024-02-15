var person = {
    name: "abhishek",
    age:25,

    get getname(){
        return this.name.toUpperCase();
    },

    // set setname(n){
    //     this.name = n.toUpperCase();
    // }
};
// person.name = "soni";

// person.setname = "abhi";
console.log(person.getname);


