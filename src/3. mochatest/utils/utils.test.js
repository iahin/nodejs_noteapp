//mocha is local so no need require

// need to do this in package.json
//  "scripts": {
//    "test": "mocha **/*.test.js"// to ercognise any file with name.test.js  in dir when using npm test command
//    "test-watch": "nodemon --exec \"npm test\""//shortcut for running nodemon using npm test-watch

const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {//describe is used to format terminal test statement by sections
/*eg. in terminal
from:
should add two numbers
should return hello world response
to:
utils
  should add two numbers
server
  should return hello world
  */


  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');//assertion clear as how you'd want to test. Check out expect doc for more usefuly assertion
      //replacing
      /*if (res !== 44) {
          throw new Error(`Expected 44, but got ${res}.`)
        }*/
    });
  });


  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();//without done(), won't call the moca test above after utils.asyncAdd
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (res) => {
      expect(res).toBe(25).toBeA('number');
      done();
    });
  });
});


//playground
// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
  var user = {location: 'Philadelphia', age: 25};
  var res = utils.setName(user, 'Andrew Mead');

  expect(res).toInclude({
    firstName: 'Andrew',
    lastName: 'Mead'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toExclude({
//     age: 23
//   })
// });
