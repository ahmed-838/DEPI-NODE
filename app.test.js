import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js'; // Adjust the path as necessary

describe('GET /', () => {
  it('should respond with the index.html file', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.header['content-type']).to.include('text/html');
  });
});
