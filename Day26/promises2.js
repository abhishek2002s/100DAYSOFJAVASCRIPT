
// const cart = ["shoes","pants","kurta"];


// createrOrder(cart, function(orderId){

//     proceedToPayment(orderId);

// });

// const promise  =createrOrder(cart);

// promise.then(function(orderId){

//         proceedToPayment(orderId);
// });


// const UserAPI = "https://randomuser.me/api/"
// const user = fetch(UserAPI);
// console.log(user);


//a  promise is an object representing the eventual completion or failure of an asynchronous operation.


const cart = ["shoes","pants","kurta"];

createOrder(cart,function(paymentInfp){
    proceddToPayment(orderId,function(paymentInfp){
        
        showOrderSummary(paymentInfp,function(){
            updatewallBalance();
        });
    });
});

createOrder(cart)
.then((orderId) => proceddToPayment(orderId))
.then((paymentInfp) => showOrderSummary(paymentInfp))
.then((paymentInfp) => updatewallBalance(paymentInfp))
