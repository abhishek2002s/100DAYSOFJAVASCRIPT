let form = document.querySelector('form');
//this is usecase will give you empty
// let height =    parseInt(document.querySelector("#height").value);


form.addEventListener("submit",function(event){
    event.preventDefault();

 let height =    parseInt(document.querySelector("#height").value);
 let weight =    parseInt(document.querySelector("#Weight").value);
 let result =    document.querySelector("#result");

 if(height === '' || height <=0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`;
 }
 
 else if(weight === '' || weight <=0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`;
 }

 else{
  let BMI =   (weight / ((height*height)/10000).toFixed(2));
    // show the result
    result.innerHTML = `<span>${BMI}</span>`
 }

 

});