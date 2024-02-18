const userEmail = "";

//truthy value
if(userEmail){
    console.log("Got  user email");
}
else{
    console.log("Don't have user email");
}

//flase valuue 
// 0,-0,null,BIgInt,undefined,"",Nan
//truthy value 
// "0",'false'," ",[],{},function(){};

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }Array is empty

// const myObj = {};
// if(Object.keys(myObj).length == 0){
//     console.log("my object is empty");
// }my object is empty

//important notes
console.log(false==0);//true
console.log(false=='');//true
console.log(false==' ');//true