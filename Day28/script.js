// DOm = DOCUMENT OBJECT MODEL

//JO BHI HUM, website par dekhte hai wo sab kuch body tag ke andar banta hai , ab jo body mein banta hai wahi humein webiste per dikhta hai, dom actually hot hai html tagor uska pura control js me

//important point of dom

// 1. selection
// 2.change
// 3.Event

//selection method::
//Accessing element ::
// 1. document.getElementById

// var head = document.getElementById("head");
// // 2. document.getElementsByClassName
// var text = document.getElementsByClassName("text");
// 3. document.getElementsByTagName
// var button = document.getElementsByTagName("button");
// 4.document.querySelector(ram baad)

// phle ek web page banao

// var btn  = document.querySelector("button");


//modifying element::

// 1.textContent
// 2. innerHTML

//kisi ko bhi change krne se phle pahal step hota hai usko select karna 

// var btn = document.querySelector("button");
// btn.textContent = "starting..."

// var heading = document.querySelector("h1");
// heading.innerHTML = "<i> Hello </i>"

//style with css :::::::::::

// var h = document.querySelector("h4");
// h.classList.add("makeitRed");
// h.classList.remove("makeitRed");

// //creating and deleting elements
// var h1 = document.createElement("h1");
// h1.textContent = "hey"
// h1.classList.add("makeitRed")
// document.querySelector("body").appendChild(h1);

// // var butn = document.querySelector("button");
// // butn.remove();

// document.querySelector("body").removeChild(h1);


//eventHandling :::::::::::
//jab bhi aap kisi element par kisi bhi prakkar ka koi actoin krte ho towaha par event by deafault automatically raise hota hai ab agar aapne koi event listener nahin banaya hai toh to wo event igniire krdiya jaata hai par agar aapne listener banaya hai us evnet par to wo event ignore nahin kiya jaayega balki uska listenr chalega

// var btn = document.querySelector("button");
// btn.addEventListener("mouseover",function(){
//     btn.textContent = "starting..."
//     btn.style.backgroundColor = "red"
// })
// btn.addEventListener("mouseleave",function(){
//     btn.textContent = "make new card"
//     btn.style.backgroundColor = "black"
//     btn.style.color = "white"
// })

//mousemove::

document.querySelector("body").addEventListener("mousemove",function(dets){
    console.log(dets)
})