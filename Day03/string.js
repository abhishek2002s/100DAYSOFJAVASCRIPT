let str = "abhishek soni";

//escape special character
// let str = "abhishek \\ soni"; // output = abhishek \ soni
// let str = "abhishek \" soni"; // output = abhishek " soni

console.log(str.length);  // output = 13;
console.log(str[3]);  // output = i;


let str1 = "hello";

console.log(str1 + " " + str);   // output = hello abhishek soni


let s = "namaste ji";
if("namaste ji" == s){
    console.log("equal");
}
else{
    console.log("not equal");
}

// output = equal

//string manipulate function

//1. concat(string);
let name1 = "abhishek";
let name2 = "soni";

let res = name1.concat(name2);
console.log(res);

//2. substr(start position,length);
//2. substring(start position,end position);


let fullname = "This is javascript tutorial. It is a good tutorial";
// let substrings = fullname.substr(7,7);
let substrings = fullname.substring(8,18);
console.log(substrings);//ouput = javascript


//3. indexOf(string);

let srch = "hello ji kaise ho sare ji hamare yha padhariye";
let position = srch.indexOf("ji");
let pos = srch.lastIndexOf("ji");
console.log(position);// output = 6
console.log(pos); //output = 23

//4. removing white space.  trim();
let char  = " namaste ji ";
let t = char.trim();
let tr = char.trimEnd();
let tri = char.trimStart();
console.log(t);//namste ji
console.log(tr);// namaste ji
console.log(tri);//nmaste ji


//5. toUpperCase and toLowerCase();
console.log("ram ram sare ne.".toUpperCase());
console.log("ram ram sare ne.".toLowerCase());

//6. replace
let v = "this is my iam very smart";
console.log(v.replace("smart","fool"));

//7. include(string);

let d  = "hey i am abhishek";
console.log(d.includes("abhishek"));
