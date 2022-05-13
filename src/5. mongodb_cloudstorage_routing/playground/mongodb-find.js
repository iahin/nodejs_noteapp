// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//Query using obj id
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b3e469a908ccd2ad85908a7')//this is not a string, so need ObjectID contructor
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

//count number of queries found
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

//Find queries of user name andrew
  // db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // });

  // db.close();
});
