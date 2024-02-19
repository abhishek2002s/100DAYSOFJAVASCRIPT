const myNums = [1,2,3];

const myTotal = myNums.reduce(function (acc,currval)  {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
},0)

console.log(myTotal);

// using arrow function
// const myTotal = myNums.reduce ( (acc,curr) => acc+curr,0)
// console.log(myTotal);

const coursesName = [
    {
        itemName :"webdev",
        cost : 900
    },
    {
        itemName :"Backend",
        cost : 9000
    },
    {
        itemName :"App developer",
        cost : 1200
    },
];

const totalcost = coursesName.reduce( (acc,item) => acc + item.cost
,0)

console.log(totalcost);