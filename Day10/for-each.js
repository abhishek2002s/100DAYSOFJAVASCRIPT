//for each is a call back function

const coding = ["js","ruby","java","cotlin","CPP"]

 coding.forEach(function(item){
     console.log(item);
 })

// //using arrow function
// // coding.forEach(element => {
// //     console.log(element);
// // });

// //using function
// function printelem(element){
//     console.log(element);
// }

// coding.forEach(printelem);


// //with index and element
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

// //complex case

// const coding = [
// //     {
// //         LanguageName : "Javascript",
// //         languageFile : "JS"
// //     },
// //     {
// //         LanguageName : "Java",
// //         languageFile : "Java"
// //     },
// //     {
// //         LanguageName : "C++",
// //         languageFile : "CPP"
// //     },
// // ]

// coding.forEach((Element) => {
// console.log(Element.LanguageName);
// })