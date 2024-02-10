//break

for(let num =0;num<=10;num++){
    if(num==5){
        break;
    }
    console.log(num);
}

//continue
for(let i=0;i<=10;i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}

//nested loop
outer:for(let j=0;j<4;j++){
    console.log(j);
    for(let i=0;i<3;i++){
        if(i==2)
        {
            break outer;
        }
        console.log("hello");
    }
}

