
var input = document.querySelector("input");


var data = [
    { name : "abhi", src : "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name : "rahul ", src : "https://images.unsplash.com/photo-1602599157738-a2656c52aefd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "satyam" , src : "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "akash", src : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "krishna", src : "https://images.unsplash.com/photo-1620228922597-cca58f177310?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "sam", src : "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "rony", src : "https://images.unsplash.com/photo-1599032909736-0155c1d43a6c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "ram" , src : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var pers = "";

data.forEach(function(elem){
    pers += ` <div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h2>${elem.name}</h2>
</div>`;
})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input",function(){
var matching  = data.filter(function(e){
  return   e.name.startsWith(input.value)
})

var newUser = "";
matching.forEach(function(elem){
    newUser += ` <div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h2>${elem.name}</h2>
</div>`;
})

document.querySelector(".people").innerHTML = newUser;
})