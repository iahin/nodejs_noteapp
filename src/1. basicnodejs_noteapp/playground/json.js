const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);//write to file notes.json

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);


// //--Json Basics
// var obj = { //this is normal way to create JSON obj
//   name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);//convert obj to string
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "Andrew","age": 25}'; //double quote an obj becomes string
// var person = JSON.parse(personString) //converts string to obj
// console.log(typeof person);
// console.log(person);
