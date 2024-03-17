// //******** Lets practice about promises *********

// //way 1::
// const promisesOne = new  Promise(function(resolve, reject){
//     //do an async task
//     //DB calls , cryptography, network
//     setTimeout((function(){
//         console.log('async task is complete');
//         resolve();
//     }),1000);
// });

// promisesOne
// .then(function(){
//     console.log("Promise consumed");
// })
// .catch(function(){
//     console.log("promise is not consume");
// })

// //way 2 ::
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

//way 3:
const promise3 = new  Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({usrename : "chai", email : "abhi@code.com"})
    },1000)
})

promise3
.then(function(user){
console.log(user);
})


//way 4:
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"abhi", password : "123"})
        }
        else
        {
            reject('Error : something went wrong');
        }
    },1000)
});

 let username = promise4
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error)
})
.finally(() => {
    console.log("finally the promise is either resolved or rejected");
})

//way 5::
const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"js", password : "123"});
        }
        else{
            reject('ERROR : jss went wrong');
        }
    },1000)
});

async function consumePromise5(){

    try{
   const response =  await promise5
   console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromise5();

//way 6::

// async function getAllUsers(){
//     try{
//    const reaponse = await fetch("https://randomuser.me/api/")
//    const data = await  reaponse.json()
//    console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getAllUsers();


fetch('"https://randomuser.me/api/"')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})





