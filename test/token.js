var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var request = require('supertest')
var app = require('../app')

describe('GET /api/token', function(){
  it('respond with ok', function(done){
    request(app)
      .get('/api/token?grant_type=client_credential&appid=APPID&secret=APPSECRET')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{"access_token":"ACCESS_TOKEN","expires_in":7200},  function(err) {
        done(err);
      });
  })
	
  it('respond with error', function(done){
    request(app)
      .get('/api/token?grant_type=client_credential2&appid=APPID&secret=APPSECRET')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{
				"errcode":40014,
				"errmsg":"invalid grant_type"
			}, function(err) {
        done(err);
      });
  })
	
  it('respond with error2', function(done){
    request(app)
      .get('/api/token?grant_type=client_credential')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{
				"errcode":40013,
				"errmsg":"invalid appid"
			},  function(err) {
        done(err);
      });
  })
	
})