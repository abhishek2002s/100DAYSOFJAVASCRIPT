//Iteration 

//for loop(const not used to give virable name)

// for(let  i=10;i<20;i=i+1){
//     console.log(i);
// }

for (let index = 0; index <=10; index++) {
    const element = index;
   if(element == 5){
    console.log("5 is best number");
   } 
    console.log(element);
}

// //nested loop
for(let i =1;i<=20;i++){
    console.log("table of :",i);
    for(let j=1;j<20;j++)
    {
        console.log(`${i} x ${j} = ${i*j}`);
    }
    console.log("\n");
}

//Iteration on array
let myArray = ["flash","batman","superman"];

for(let index = 0;index < myArray.length;index++){
    const element = myArray[index];
    console.log(element);
}

// //break and continue

//break
// for(let i =1;i<=20;i++){
//     if(i==5){
//         console.log("Detected 5");
//     break;
//     }
//     console.log(`value of i is ${i}`);
// }


//continue
// for(let i =1;i<=20;i++){
//     if(i==5){
//         console.log("Detected 5");
//     continue;
//     }
//     console.log(`value of i is ${i}`);
// }


//while and do while loop
// let index = 0;
// while(index<=10){
//  console.log(`Value of index is ${index}`);
//  index+=2;    
// }

// let myArray = ["flash","batman","Superman"]
// let arr = 0;
// while(arr<myArray.length){
//     console.log(`value is,${myArray[arr]}`);
//     arr++;
// }

// let num=0;
// do{
//     console.log(num);
//     num++;
// }while(num<10);

// let myArray = ["flash","batman","Superman"]
// let arr = 0;
// do{
//     console.log(`value is,${myArray[arr]}`);
//     arr++;
// }while(myArray.length>arr);

