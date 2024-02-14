let person = {
    firstName : "abhi",
    lastName : "soni",
    sayhello(){
        console.log("Hello ! iam "+ this.firstName +" i have a "+ car.brand+"car");
    }
};


let car = {
    brand : "tata",
    model: "nano"
};

person.sayhello();