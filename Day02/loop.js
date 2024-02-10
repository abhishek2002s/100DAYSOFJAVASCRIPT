//while loop
let counter =0;

while(counter<10){
    console.log(counter+1);
    counter++;

}

//for loop
for(let count =0;count<10;count++){
    console.log(count+1);
}

//do while loop
let j =0;
do{
    console.log("Hello ji")
    j++;
}while(j<=10);

//chech even nummber sum betweem 0 to 100

let sum =0;

for(let num =1;num <=1000;num++)
{
    if(num%2==0){
        sum = sum+num ;
    }
}

console.log(sum);
