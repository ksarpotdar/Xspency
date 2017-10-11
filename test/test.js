'use strict';

var chai = require('chai');
//var expect = require("chai").expect;
var chaiHttp = require('chai-http');
var should = chai.should();
var login = require('../controllers/xspencyController');
var server = require('../server');

chai.use(chaiHttp);

describe('The Xspency controller', function() {

  // Login route testing
  it('should return a 400 response if there is missing username', function(
    done
  ) {
    var login = {
      username: '',
      password: 'Rlgh45'
    };
    chai
      .request(server)
      .post('/api/login')
      .type('form')
      .send(login)
      .end(function(err, res) {
        res.should.have.status(400);
        done();
      });
  });

  describe('login route', function() {
    it('should return a 400 response if there is missing password', function(
      done
    ) {
      var login = {
        username: 'rmcrary',
        password: ''
      };
      chai
        .request(server)
        .post('/api/login')
        .send(login)
        .end(function(err, res) {
          res.should.have.status(400);
          done();
        });
    });

    it('should have valid data input in username', function(done) {
      var login = {
        username: '*&$(`',
        password: 'Rlgh45'
      };
      chai
        .request(server)
        .post('/api/login')
        .type('form')
        .send(login)
        .end(function(err, res) {
          res.should.have.status(400);
          done();
        });
    });

    it('should have valid data input in password', function(done) {
      var login = {
        username: 'rmcrary',
        password: '*&$('
      };
      chai
        .request(server)
        .post('/api/login')
        .type('form')
        .send(login)
        .end(function(err, res) {
          res.should.have.status(400);
          done();
        });
    });

    it('should have valid data input in both fields', function(done) {
      var login = {
        'username': 'rmcrary',
        'password': 'rI73l'
      };
      chai
        .request(server)
        .post('/api/login')
        .type('form')
        .send(login)
        .end(function(err, res) {
            console.log(res.body)
          res.should.have.status(200);
          done();
        });
    });
  });

  //   Add new expense line testing
  //   describe('add expenses route', function() {
  //     it('should have', function(done) {
  //       var login = {

  //       };

  //       chai
  //         .request(server)
  //         .post('/api/expenses')
  //         .send(login)
  //         .end(function(err, res) {
  //           res.should.have.status(400);
  //           done();
  //         });
  //     });
  //   });
});

 //   Update an existing expense line testing
  //   describe('update expenses route', function() {
  //     it('', function(done) {
  //       var login = {

  //       };

  //       chai
  //         .request(server)
  //         .post('/api/expenses')
  //         .send(login)
  //         .end(function(err, res) {
  //           res.should.have.status(400);
  //           done();
  //         });
  //     });
  //   });
});

 //   Delete an existing expense line testing
  //   describe('delete expenses route', function() {
  //     it('', function(done) {
  //       var login = {

  //       };

  //       chai
  //         .request(server)
  //         .post('/api/expenses')
  //         .send(login)
  //         .end(function(err, res) {
  //           res.should.have.status(400);
  //           done();
  //         });
  //     });
  //   });
});
