const request = require('supertest');
const app = require('../app.js');

describe('Simple Rout Test', () => {
    it('should show "Hello world!"', () => {
      const res = request(app).get('/');

      const str = res.send('Hello World');
      const text = str._data;
      expect(text).toEqual('Hello World');
    })
  })