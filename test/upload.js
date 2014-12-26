var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var request = require('supertest')
var app = require('../app')

// .send({ name: 'Manny', species: 'cat' })
describe('GET /api/media/upload', function(){
  it('respond with ok', function(done){
    request(app)
      .post('/api/media/upload?access_token=wx50b97d02c86f6c26&type=image')
			.field('Content-Type', 'multipart/form-data')
			.attach('media', 'upload.jpg')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{
			"type":"TYPE",
			"media_id":"MEDIA_ID",
			"created_at":123456789
		},  function(err) {
        done(err);
      });
  })
	
  // it('respond with error', function(done){
  //   request(app)
  //     .post('/api/media/upload?access_token=wx50b97d02c86f6c26&type=image')
  // 			.attach('media', '../test/fixtures/upload.jpg')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200,{
  // 				"errcode":40004,
  // 				"errmsg":"invalid media type"
  // 			}, function(err) {
  //       done(err);
  //     });
  // })
  //
  // it('respond with error2', function(done){
  //   request(app)
  //     .post('/api/media/upload?access_token=wx50b97d02c86f6c26&type=image')
  // 			.attach('media', '../test/fixtures/upload.jpg')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200,{
  // 				"errcode":40004,
  // 				"errmsg":"invalid media type"
  // 			},  function(err) {
  //       done(err);
  //     });
  // })
  //
})