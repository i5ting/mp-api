var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var request = require('supertest')
var app = require('../app')

describe('GET /api/token', function(){
  it('respond with json', function(done){
    request(app)
      .get('/api/token?grant_type=client_credential&appid=APPID&secret=APPSECRET')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{"access_token":"ACCESS_TOKEN","expires_in":7200}, done);
  })
})