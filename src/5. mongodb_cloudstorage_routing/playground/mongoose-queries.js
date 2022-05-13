const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

 var id = '5b4231c6495fe8208098a5c1';//id from mongodb


if (!ObjectID.isValid(id)) {//check if id exist in the collection
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);//print array of objects
  console.log(JSON.stringify(todo, undefined, 2));//print just selected objects since this func print 1 todo, it will make it readable
}).catch((e) => console.log(e));
