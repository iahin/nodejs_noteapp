// const MongoClient = require("mongodb").MongoClient; //use MongoClient obj in mongodb module to connect to mongodb client
const {MongoClient, ObjectID} = require('mongodb');//destructured way to grab obj from json

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {//for localmachine > localhost:port/dbname, for server: server url like aws, heroku
  if (err) {//if error occurs, stop here and display err msg
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    //_id: 123,//you can create your own id if need to
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);//displays data that is stored in db in json format

    //Get timestamp from default obj id
    //console.log(result.ops[0]._id.getTimestamp());
  });


   db.close();
 });
