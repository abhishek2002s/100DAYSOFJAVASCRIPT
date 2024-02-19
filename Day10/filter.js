// const coding = ["js","ruby","java","cotlin","CPP"]

// const values = coding.forEach ( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);

//filter 

const myNum = [1,2,3,4,5,6,7,8,9,10];
// const newNum = myNum.filter( (num) => num > 4)


// const newNum = myNum.filter( (num) => {
//     return num >4
// })


const newNum = []

myNum.forEach( (num) => {
    if(num>4){
        newNum.push(num);
    }
})
console.log(newNum);

const books = [
    {
        tittle:'Book one',genre:'fiction',publish:1898,edition:2016
    },
    {
        tittle:'Book two',genre:'Hiction',publish:1898,edition:2016
    },
    {
        tittle:'Book three',genre:'fiction',publish:1898,edition:2016
    },
    {
        tittle:'Book four',genre:'History',publish:2010,edition:2016
    },
    {
        tittle:'Book five',genre:'History',publish:2012,edition:2016
    },
    {
        tittle:'Book six',genre:'fiction',publish:2018,edition:2016
    },
];

const userBook = books.filter( (bk) => bk.genre === 'History')
console.log(userBook);

const userBooks = books.filter( (bk) => bk.publish >= 2000 && bk.genre === "History")
console.log(userBooks)

