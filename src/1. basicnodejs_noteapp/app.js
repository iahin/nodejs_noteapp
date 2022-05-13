//require basically fetch modules
const fs = require('fs'); // local fs(filesystem) module
const _ = require('lodash');//npm module lodash requires to use "npm install" in terminal before use
const yargs = require('yargs');

const notes = require('./notes.js');//your own mudule in the same folder

const titleOptions = {//constant obj for using it in yarg description
  describe: 'Title of note',
  demand: true,
  alias: 't'//allows you to use shortcut command with letter
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs//set up help description for commands
  .command('add', 'Add a new note', {
    title: titleOptions,//inject the obj above which will be desplayed in terminal in json obj form
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}


// Other stuff

// //--Get local machine username and write to file
// var user = os.userInfo();//Get os username
// //Use this way works for latest version
// fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err){
//   if(err){
//     console.log('unable to write to file');
//   }
// });

// //--check if variable is a string
// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// //--filter unique values using lodash module
// var filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1, 2, 3, 4]);
// console.log(filteredArray);

// //--get userinput inside cmd
// var command = process.argv[2];//to get 3rd command from terminal
// console.log('Command: ', command);
// console.log(process.argv);// shows all commands entered inside cmd or their result
// if (command === 'add') {
//   console.log('Adding new note');
// }

// //--Using yarg module for easy command parsing. Place user command priority inside terminal
// const argv = yargs.argv;// stores input to yarg lib
// var command = argv._[0];//gets 3rd command(your input after node app.js)
// console.log('Command: ', command);
// console.log('Yargs', argv);


// //--Refractoring: Consecutative command inside terminal
// if (command === 'add') {
//   var note = notes.addNote(argv.title, argv.body);
//   if (note) {//what does it check for?
//     console.log('Note created');
//     console.log('--');
//     console.log(`Title: ${note.title}`);
//     console.log(`Body: ${note.body}`);
//   } else {
//     console.log('Note title taken');
//   }
