const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');//needed to mock function as spies to trac its call

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);//replace db variable in db.js

  it('should call the spy correctly', () => {
    var spy = expect.createSpy(); //track the calls that are made to other functions and make various assertions based on the arguments and context that were used. eg. app.js uses functions from db to save user name
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('should call saveUser with user object', () => {
    var email = 'andrew@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
