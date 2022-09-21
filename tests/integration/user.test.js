import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import HttpStatus from 'http-status-codes';

import app from '../../src/index';

let jwtToken;
let noteId;

describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => { });
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('POST /registration', () => {
    it('given new user registration when added should return status 201', (done) => {
      const userdetails = {
        FirstName: 'chinki',
        LastName: 'kumari',
        Email_Id: 'singhchinkikumari@gmail.com',
        Password: 'jadoo123'
      };
      request(app)
        .post('/api/v1/users')
        .send(userdetails)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.CREATED);

        });
      done();

    });
    it('given new user login when added should return status 200', (done) => {
      const userdetails = {
        Email_Id: 'singhchinkikumari@gmail.com',
        Password: 'jadoo123'
      };
      request(app)
        .post('/api/v1/users/login')
        .send(userdetails)
        .end((err, res) => {
          jwtToken = res.body.data;
          console.log("jwt------------->", jwtToken);
          expect(res.statusCode).to.be.equal(HttpStatus.ACCEPTED);

        });
      done();
    });

  });
  describe('POST /notes', () => {
    it('given user details notes created 200', (done) => {
      const userdetails = {
        Title: 'television',
        Description: 'smart television'
      };
      request(app)
        .post('/api/v1/notes')
        .send(userdetails)
        .set('Authorization', `bearer ${jwtToken}`)
        .end((err, res) => {
          noteId = res.body.data._id;
          // console.log("NoteId create notes=========> ", noteId)
          expect(res.statusCode).to.be.equal(HttpStatus.CREATED);

        });
      done();
    });

    it('Given user login details should fetch saved get all notes', (done) => {
      request(app)
        .get('/api/v1/notes')
        .set('Authorization', `bearer ${jwtToken}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.ACCEPTED);

        });
      done();
    });
    it('Given user id deatails fetch notes', (done) => {
      request(app)
        .get(`/api/v1/notes/${noteId}`)
        .set('authorization', `bearer ${jwtToken}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.OK);

        });
      done();
    });
    it('given the note id of a user should update the note', (done) => {
      const userdetails = {
        Title: 'Fan',
        Description: 'All fan'
      };
      request(app)
        .put(`/api/v1/notes/${noteId}`)
        .send(userdetails)
        .set('Authorization', `bearer ${jwtToken}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.OK);

        });
      done();
    });

    it('given the note id of a user should delete the note', (done) => {
      request(app)
        .delete(`/api/v1/notes/${noteId}`)
        .set('authorization', `bearer ${jwtToken}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.OK);

        });
      done();
    });
  });
});









