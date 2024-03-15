//Make new Project 
//1: password generator
//HTML AND JS PART is DONE
//HALF CSS IS DONE

let inputSlider = document.querySelector(".slider");
console.log(inputSlider);
let lengthDisplay = document.querySelector("[data-len-container]");
let passDisplay = document.querySelector("#displayPass");
let dataCopy = document.querySelector("[data-copyMsg]");
let copyBtn = document.querySelector("[copy-btn]");
let upperCaseCheck = document.querySelector("#uppercase");
let lowerCaseCheck = document.querySelector("#lowercase");
let numberCheck = document.querySelector("#number");
let symbolsCheck = document.querySelector("#symbols");
let indicator = document.querySelector("#marker");
console.log(indicator);
let genpass = document.querySelector("#gen-pass");
const allCheckBox = document.querySelectorAll("input[type=checkbox");

let symbols = '!@#$%^&*()_+=-:;"/\|<>,.?~';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();


//intially
//set passwordLength
function handleSlider(){
inputSlider.val = passwordLength;
lengthDisplay.innerText = passwordLength;

}

function setIndicator(color){
    indicator.style.backgroundColor = color;
}


function getRanInteger(min,max){
   return Math.floor(Math.random() * (max - min )) + min;
}

function generateRandomNumber(){
    return getRanInteger(0,9);
}

function generateLowercase(){
    return String.fromCharCode(getRanInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRanInteger(65,91));
}

function generateSymbol(){
 let randNum = getRanInteger(0,symbols.length);
 return symbols.charAt(randNum);
}

function calcuStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(upperCaseCheck.checked) hasUpper = true;
    if(lowerCaseCheck.checked) hasLower = true;
    if(numberCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

if(hasLower && hasUpper && (hasNum || hasSym) && passwordLength >=8){
    setIndicator("#0f0");
}
else if((hasLower || hasUpper) && (hasNum || hasSym) &&passwordLength >=6){
    setIndicator("#ff0");
}
else{
    setIndicator("#f00");
}
}

async function copyContent(){

    try{
     await navigator.clipboard.writeText(passDisplay.value);
    dataCopy.innerText = "copied";
    }
    catch(e){
      dataCopy.innerText = "Failed";
    }
 //to make copy wala span visible
    dataCopy.classList.add("active");
    setTimeout(() => {
        dataCopy.classList.remove("active");
    },2000);
    
}

inputSlider.addEventListener("input",(e) => {
    passwordLength = e.target.value;
    handleSlider();
})

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked){
            checkCount++;
        }

        if(passwordLength  < checkCount){
            passwordLength = checkCount;
            handleSlider();
;        }
    });
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener("change",handleCheckBoxChange);
})

copyBtn.addEventListener('click',() => {
    if(passDisplay.value){
        copyContent();
    }
});

function shufflePassword(array){
    //fisher yates method
    for(let i= array.length -1; i>0;i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach( (el) => (str += el));
    return str;

}

genpass.addEventListener("click", () => {
   //none of the checkbox are selected
   if(checkCount <= 0){
    return;
   }
   if(passwordLength < checkCount){
    passwordLength = checkCount;
    handleSlider();
   }

   //lets start the journey to find new password

   //remove old password
   password = "";

   //lets puut the stuff mentined by checkbox

//    if(upperCaseCheck.checked){
//     password += generateUpperCase();
//    }
//    if(lowerCaseCheck.checked){
//     password += generateLowercase();
//    }
//    if(numberCheck.checked){
//     password += generateRandomNumber();
//    }
//    if(symbolsCheck.checked){
//     password += generateSymbol();
//    }

let funcArr = [];
if(upperCaseCheck.checked){
    funcArr.push(generateUpperCase);
}
if(lowerCaseCheck.checked){
    funcArr.push(generateLowercase);
}
if(numberCheck.checked){
    funcArr.push(generateRandomNumber);
}
if(symbolsCheck.checked){
    funcArr.push(generateSymbol);
}

//compulsary addition
for(let i=0;i<funcArr.length; i++){
    password += funcArr[i]();
}

console.log("compulsary addition done;")
//remaining addition
for(let i=0;i<passwordLength- funcArr.length;i++){

    let ranIndex = getRanInteger(0, funcArr.length);
    password += funcArr[ranIndex]();
}

//shuffle the password
password = shufflePassword(Array.from(password));

//show in UI
passDisplay.value = password;
//calculate strength
calcuStrength();

});


