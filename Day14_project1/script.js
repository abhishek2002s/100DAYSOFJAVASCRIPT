let button = document.querySelectorAll(".color");
let body = document.querySelector("body");

button.forEach(function (btn){
btn.addEventListener("click",function(event){
        console.log(event);
        console.log(event.target);

        // if(event.target.id == 'color1')
        // {
        //     body.style.backgroundColor = 'cyan';
        // }
        
        // if(event.target.id == 'color2')
        // {
        //     body.style.backgroundColor = 'yellow';
        // }
        // if(event.target.id == 'color3')
        // {
        //     body.style.backgroundColor = 'green';
        // }
        // if(event.target.id == 'color4')
        // {
        //     body.style.backgroundColor = 'brown';
        // }
        // if(event.target.id == 'color5')
        // {
        //     body.style.backgroundColor = 'grey';
        // }
        // if(event.target.id == 'color6')
        // {
        //     body.style.backgroundColor = 'black';
        // }

        // using switch case
        switch(event.target.id)
        {
         case "color1" :
            body.style.backgroundColor = 'cyan';
            body.style.color = 'black';
            break;
         case "color2" :
            body.style.backgroundColor = 'yellow';
            body.style.color = 'black';
            break;
         case "color3" :
            body.style.backgroundColor = 'green';
            body.style.color = 'black';
            break;
         case "color4" :
            body.style.backgroundColor = 'brown';
            body.style.color = 'black';
            break;
         case "color5" :
            body.style.backgroundColor = 'grey';
            body.style.color = 'black';
            break;
         case "color6" :
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
            break;
        }

})
});