const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

  describe('GET /', () => {//nested describe to add subsections
    it('should return hello world response', (done) => {
      request(app)//dir where server.js lies
        .get('/')
        .expect(404)//status, should always be 200(pass), 404 is fail
        .expect((res) => {
          expect(res.body).toInclude({//check if the obj includes the error
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Andrew',
            age: 25
          });
        })
        .end(done);
    });
  });
});
