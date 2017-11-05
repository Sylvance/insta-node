process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./app');
let should = chai.should();

chai.use(chaiHttp);
/*
* Test the / /GET route
*/
describe('/GET index', () => {
    it('it should GET all the index page', (done) => {
      chai.request(server)
          .get('/index')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
});
/*
* Test the /users/ /GET route
*/
describe('/GET users index', () => {
    it('it should GET the users index page', (done) => {
      chai.request(server)
          .get('/users/')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
});