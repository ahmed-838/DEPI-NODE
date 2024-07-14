import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import app from '../app'; // Adjust the path as necessary

chai.use(chaiHttp);

describe('Chat API', () => {
  it('should insert a new message', (done) => {
    chai.request(app)
      .post('/chat')
      .send({ username: 'test_user', message: 'This is a test message' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Message sent successfully!');
        done();
      });
  });

  it('should fail if message is missing', (done) => {
    chai.request(app)
      .post('/chat')
      .send({ username: 'test_user', message: '' })
      .end((err, res) => {
        expect(res).to.have.status(500);
        done();
      });
  });

  it('should fail if username is missing', (done) => {
    chai.request(app)
      .post('/chat')
      .send({ username: '', message: 'This is a test message' })
      .end((err, res) => {
        expect(res).to.have.status(500);
        done();
      });
  });
});
