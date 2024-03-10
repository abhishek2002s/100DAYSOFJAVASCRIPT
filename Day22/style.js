const event = new Event("chacha");

document.querySelector("button").addEventListener("chacha",function(){
    alert("cahahca event hua");
})

document.querySelector("button").dispatchEvent(event);

