const fs = require('fs');

var fetchNotes = () => { // arrow funtion, similar to var fatchnote = funtion(arg) {};
  try {//try catch if file is deleted
    var notesString = fs.readFileSync('notes-data.json');//read file content
    return JSON.parse(notesString);//convert string in file to json ad convention when retrieving data
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));//need to stringyfy to write to file
};

//function to append notes in obj
var addNote = (title, body) => {
  var notes = fetchNotes(); //get notes in array
  var note = { //obj
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);//single line function to check if there is dublicate title using filter method of notes array

  if (duplicateNotes.length === 0) {//if there is no title(by checking length)
    notes.push(note);//append new note array to obj
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length; //will retrun true if note is removed
};

var logNote = (note) => {//Reusable funtion to display note changes in every ifelse in app.js
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

//declare all functions that can be called given above. Can't call function from here if never declare like this.
//Can all declare seperate for each function like this: module.exports.addNote = () => {};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
