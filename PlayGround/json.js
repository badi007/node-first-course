// //Conveting JSOn object to string
// var obj={name : "badi", age : 25} //Json use : 
// console.log(typeof obj);
// console.log(obj);

// var jsonString = JSON.stringify(obj);
// console.log(typeof jsonString);
// console.log(jsonString);

// //Converting string to JSON Object
// var jsonObject=JSON.parse(jsonString);
// console.log(typeof jsonObject);
// console.log(jsonObject);

//Reading from File system
const fs=require('fs');

var originlNote= {name : "Nishlu", age:5};
//var originlNoteString=J
fs.writeFileSync('note.json',JSON.stringify(originlNote));

var note=JSON.parse(fs.readFileSync('note.json'));
console.log(typeof note)
console.log(note);