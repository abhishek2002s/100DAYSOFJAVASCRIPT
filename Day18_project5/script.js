//step 1: generate a random color 

let randomColor = function(){
    let hex = "0123456789ABCDEF";
    let color = "#";

    for(let i=0;i<6;i++){
          color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let setIntervalId;
let startChangingColor = function(){
    if(!setIntervalId){
  setIntervalId =    setInterval(changeBgColor,1000);
    }
   function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
    document.getElementById("head").style.color = randomColor();
    document.getElementById("stop").style.color = randomColor();
    document.getElementById("start").style.color = randomColor();
    document.getElementById("stop").style.backgroundColor = randomColor();
    document.getElementById("start").style.backgroundColor = randomColor();
   }
};


let stopChangingColor = function(){
 clearInterval(setIntervalId);
 setIntervalId = null;
};

document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);

