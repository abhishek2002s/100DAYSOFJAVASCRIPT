//sync and async kya hota hai ? ::


//sync matlab ek ke baad ek dusra hoga, jab tak ek coommand complete naa ho, dusra shuru nahin hoga

//async matlab saara kaam ek sath shuru kardo, jiska answer pahle aajaye usak jwaab dedena.


// kiase pata chlta hai ki hum sync codem likh rahe ya sync ?

// setInterval
// setTimeout
// Promises
// Async/await
// fetch
// axios
// XMLHttpRequest

// agr aap inka use kr rhe ho toh aap async ka use kr rhe ho .
// agr nahin kr rhe toh aap sync ka use kr rhe ho


//async js kya hai ::

//kai baar apka finnal code depended hota hai kisi aur ke server par, is case mein humein pata hain hota ki answer uske server se kab laut kar aayega, to hum kya nahi kr skte is writing syync code, isse nipatne ke liye hum log async code likh dete hai taali blocking naa ho and jab bhi answer aaye humare answer ke respect mein chalne wla code chal jaaye.

//callback  func humesha async code mein asnwer aane par chalta hai

// console.log("hey"); // output  1
// setTimeout(function(){
//  console.log("hello"); // output  3
// },2000)
// console.log("world"); //output 2


//js is not asynchronous?:::::::
//async j=ka matlab hota hai do kaam ek sath hona 
//js kabhi do kaam ek sath nhi kr skta hai

//a -sync
//b -sync
//c -async
//d -sync

//|                     |                      |
//|                     |                      |
//|         a           |                      |
//|         b           |                      |
//|         d           |    c                 |
//|                     |                      |
//|     main stack      |side tack             |
//|                     |                      |
//|                     |                      |
//|                     |                      |
//|                     |                      |
//|                     |                      |
//|                     |                      |
//|                     |                      |
//|                     |                      |
//|                     eventloop              |

// phle hamseha main stack ka kaam pura kiya jayega .. jab async code side stack processing ho rha..

// jab main stack khali ho jaye toh wo jake puchuega side stack se c se ki tumara kaam ho gya hai ki nhi agr ho gya ho toh use main stack me le jaate hai .

//side stack se main stack me le jana ka kaam event loop krta hai

//side stack ka data main stack me tabhi jayega jab main stackk khali ho jayega
// main stack 
//hey 
//hey3

//side stack
//hey2

console.log("hey"); // phle run hoga or mein stack se chla jayega

//main stack mein:;
// hey3
setTimeout(function(){
    //phle check hoga ki main stack khali hai ki nahin .. abhi mains tack ke ander hey3 toh kahli nahin hai .. ruk jao bolega async ko
    console.log("hey2"); //last me yh run hoga

    //main s -eempty
    //side s -eempty

    // main stack empty ho gya hai phele event loop  jake sidestack se puchega tumahra kaam ho gya hai , side stack kahega ki ho gya hai phir event loop  side stack se data ko main stack me daal dega
},0)

console.log("hey3"); //ab yh  run hoga or main stack se chal jaeyga
//main stack - empty


//single threading -- ek kaamm ko ek baar me process karna 
//multi threading -- do kaam ko ek sath process karna

//js is single threading language

//callbacks:::=> function
//async code likhne ke liye::
// setInterval
// setTimeout
// Promises
// Async/await
// fetch
// axios
// insbka answer chlane ke liye hum use krte..
//callback
//then and catch


//callbacks function ek aisa function hai jo sirf tab chlata hai jab async code ka completion ho jata hai..



//Promises ::: --- apne aap me ek world hai


var ans = new Promise((res,rej) => {
    if(true){
        return res();
    }
    else{
        return rej();
    }
})

ans
.then(function(){
    console.log("resolve ho gya tha")
})
.catch(function(){
    console.log("reject ho gya");
})

//ex 2::
var res=  new Promise((res,rej)=>{
    var m = Math.floor(Math.random() * 10);

    if(m< 5){
        return res();
    }
    else{
        return rej();
    }
})

res
.then(function(){
    console.log("below than 5");
})
.catch(function(){
    console.log("above");
})



//nesting promise

// var result = new Promise(function(res,rej){
//     return res('sbase phle ghr per aao')
// })
// var p2 = ans.then(function(data){
//     console.log(data);

//  return   new Promise(function(res,rej){
//         return res("gate kholo or gate lgao");
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);

//     return new Promise(function(res,rej){
//         return res("khana pkao or khana khao");
//     })
// })

// var p4 = p3.then(function(data){
//     console.log(data);

//     return new Promise(function(res,rej){
//         return res("incognitube chalo");
//     })
// })
// var p5 = p4.then(function(data){
//     console.log(data);

//     return new Promise(function(res,rej){
//         return res("so jao");
//     })
// })

// p5.then(function(data){

//     console.log(data)
// })


//async await::

//koi bhi aisa function jsime aap async code likehnge kyoki async code ha to aap promise ka use kr skte hai , jab uska answer aaeyga aapko then lagana padega ,us then ko laagaane se bachne ke liye , aap async await ka istemaal kar skte hai.


//without using asycn wait we use then ()
//  function abcd(){
//      fetch(`https://randomuser.me/api/`)
//      .then(function(raw){
//         return raw.json();
//      })
//      .then(function(data){
//         console.log(data);
//      });
// }

// abcd();


//with the help of async and await we dont use then in code
async function abcd(){
   let raw =  await fetch(`https://randomuser.me/api/`);
 let ans =  await raw.json();
 console.log(ans);

}
abcd();

//dekho jab koi bhi code async hai toh aapko uske liye wait karna padta hai kyoki humein nahin pta uska anwer kab aayega

//5 use cases ekdum real world waale
//node mein jab db
//fetch
// setTimeout
//setinterval


//concurrency = js mein sync code and async code ek saath process ho raha the ya hai concurrency

//paarallelism = focus jayda karta hai different proxcessor and unka cores par kaam ko chalaane par

//throttling = kisi code ko control karna number of execution


