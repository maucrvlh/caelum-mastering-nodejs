const express = require('../../config/custom-express');

const request = require('supertest')(express);

describe("#produtosTest", () => {

  it("listagem de produtos json", (done) => {
    request.get('/produtos')
      .set('Accept', 'text/html')
      .expect('Content-type', /html/)
      .expect(200, done);
  });

  it("listagem de produtos json", (done) => {
    request.get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200, done);
  });
});
