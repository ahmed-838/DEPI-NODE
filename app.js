// Import necessary modules
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assuming your Express app instance is exported from 'app.js'
const expect = chai.expect;

// Configure chai to use chai-http
chai.use(chaiHttp);

// Example test suite for the Express app
describe('Express App', function() {
  
  // Test case for GET /
  describe('GET /', function() {
    it('should return status 200 and a JSON response', function(done) {
      chai.request(app)
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.have.property('message').that.equals('Docker is easy');
          done();
        });
    });
  });

  // Add more test cases as needed
  
});
const app = require("express")()

app.get('/',(req, res)=>{
    res.json({message: " Docker is easy "})
})

const port = process.env.port || 8080

app.listen(port, (req, res)=>{
    console.log(`app running on http://localhost:${port}`)
})