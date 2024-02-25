let randomNumber = parseInt(Math.random() * 100 +1 );
let submit = document.querySelector('#subm');
let UserInput = document.querySelector("#guessField");
let PreviousGuess = document.querySelector('#Pg');
let remainGuess = document.querySelector('#Rg');
let lowOrHi = document.querySelector(".LowOrHi");
let startOver = document.querySelector('#resultCon');

let p =document.createElement('p');

let prevGuess = [];
let NumGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(event){
        event.preventDefault();
    const guess   =  parseInt(UserInput.value);
    console.log(guess);
    validateGuess(guess);
    })
}

function validateGuess(guess){

if(isNaN(guess)){
    alert('please enter a valid number');
}
else if(guess < 1 ){
    alert('please enter a number more than 1');
}
else if(guess > 100)
{
    alert("please a enter less than 100");
}
else{
    prevGuess.push(guess);
    if(NumGuess === 11){
           displayGuess(guess);
           displayMessage(`Game Over .Random number was ${randomNumber}`);
           endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
}

}


function checkGuess(guess){
if(guess === randomNumber){
    displayMessage(`You guess the right number`);
    endGame();
}
else if(guess < randomNumber)
{
    displayMessage(`Number is tooo low`);
}
else if(guess > randomNumber)
{
    displayMessage(`Number is tooo high`);
}
}

function displayGuess(guess){
UserInput.value = '';
PreviousGuess.innerHTML += `${guess}, `;
NumGuess++;
remainGuess.innerHTML = `${11- NumGuess}`;
}


function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame()
{
    UserInput.value ='';
    UserInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML= `<h3 id ="newGame">Start New Game</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame()
{
let newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(event){

 randomNumber =  parseInt(Math.random() * 100 +1 );
 prevGuess =[];
 NumGuess =1;
 PreviousGuess.innerHTML= '';
 remainGuess.innerHTML = `${11- NumGuess}`;
 UserInput.removeAttribute('disabled');
 startOver.removeChild(p);
    playGame = true;
})
}