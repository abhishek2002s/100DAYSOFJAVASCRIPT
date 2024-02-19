//for in loop
//for in used for Object

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);  
}


const programming = ["js","rb","py","java","CPP"];

for(const key in programming){
    console.log(programming[key]);
}

const map = new Map()
map.set('In',"india");
map.set('USA',"United State of America");
map.set('Fr',"France");
console.log(map);

//no output beacuse map is not iteratble;

for (const key in map) {
console.log(key);        
    }