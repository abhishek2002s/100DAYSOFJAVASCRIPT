const marvel_hero = ["thor","irinman","spiderman"];
const dcHeroes = ["superman", "flash","batman"];
// marvel_hero.push(dcHeroes);
// console.log(marvel_hero); //[ 'thor', 'irinman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


// console.log(marvel_hero.concat(dcHeroes));
// const totalHeroes = marvel_hero.concat(dcHeroes);
// console.log(totalHeroes);
//output = [ 'thor', 'irinman', 'spiderman', 'superman', 'flash', 'batman' ]


//spread operator
const allNewHeroes = [...marvel_hero, ...dcHeroes];
console.log(allNewHeroes);
//[ 'thor', 'irinman', 'spiderman', 'superman', 'flash', 'batman' ]

//more operatrion
const anotherArray = [1,2,3,[4,5,7],[6,7,[4,5]]];
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);
//[
    //1, 2, 3, 4, 5,
    //7, 6, 7, 4, 5
  //]


  console.log(Array.isArray("abhi"));

  //To convert inot an array::
  console.log(Array.of("abhishek"));
  //[ 'abhishek' ]
  console.log(Array.from("abhishek"));
//[
  // 'a', 'b', 'h',
  //  'i', 's', 'h',
   // 'e', 'k'
  //]

  console.log(Array.from({name:"abhi"})) // if you not specify the value and property then it will create an empty array
//[]
  
  let score1 = 100;
  let score2 = 200;
  let score3 = 300;
  console.log(Array.of(score1,score2,score3));
  //[ 100, 200, 300 ]
