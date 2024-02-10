alert("heello world");


// //prompt function
let age  = prompt("Enter the value of n",20);

if(age != null)
{
    document.write(`your age is ${age}`);
}
else{
    document.write("You filled it blank");
}

//confirm function
let ans = confirm("Are yous sure you wa nt to delete");

if(ans == true)
{
    document.write("Deleted");
}
else{
    document.write("not delete");
}