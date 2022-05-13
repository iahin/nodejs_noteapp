require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');//validate ana convert json to js obj
const {ObjectID} = require('mongodb');//from mongodb not mongoose

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());//app use take in middlewear

//http requests: app.post, app.get, app.delete

app.post('/todos', (req, res) => {//todos is url localhost/todos
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});//({todos}) displays the data that was deleted instead of whole object. (todos) shows objects with properties
  }, (e) => {
    res.status(400).send(e);
  })
});

//quary todo by id
app.get('/todos/:id', (req, res) => {//:id used for variable route url. U can add an id from db in the url like /todos/66ba23122aa23aa232, it will quary for that user
  var id = req.params.id;//get ide from :id above

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();//send() request and recieve queries to read whats being quaried on postman and web
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);//pick takes body json and pull the specific obj text and completed(not in db but will be auto added to check if todo is compeleted) so user only can update those and not any other things

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`); //use `` instead of '' to get the ${} working in windows
});

module.exports = {app};//for testing, to call from test directory
