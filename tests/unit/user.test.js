// import { expect } from 'chai';
// import * as UserService from '../../src/services/user.service';
// import mongoose from 'mongoose';

// import dotenv from 'dotenv';
// dotenv.config();

// describe('User', () => {
//   before((done) => {
//     const clearCollections = () => {
//       for (const collection in mongoose.connection.collections) {
//         mongoose.connection.collections[collection].deleteOne(() => {});
//       }
//     };

//     const mongooseConnect = async () => {
//       await mongoose.connect(process.env.DATABASE_TEST);
//       clearCollections();
//     };

//     if (mongoose.connection.readyState === 0) {
//       mongooseConnect();
//     } else {
//       clearCollections();
//     }

//     done();
//   });

//   describe('Get Users', () => {
//     it('should return empty array', async () => {
//       const result = await UserService.getAllUsers();
//       expect(result).to.be.an('array');
//     });
//   });
// });
//------------

//   it('given login user not exist should return status 400', (done) => {
  //     const userdetails = {
  //       Email_Id: 'singhchinkikumari@gmail.com',
  //       Password: 'jadoo12399'
  //     };
  //     request(app)
  //       .post('/api/v1/users/login')
  //       .send(userdetails)
  //       .end((err, res) => {
  //         expect(res.statusCode).to.be.equal(HttpStatus.BAD_REQUEST);

  //       });
  //     done();
  //   });
  // });

  // describe('POST/Forgot Password', () => {
  //   const userdetails = {
  //     Email_Id:"singhchinkikumari@gmail.com",
  //   }
  //   it('Given user mailId should check details in DB and send mail with reset link', (done) => {
  //     request(app)
  //       .post('/api/v1/users/forgetPassword')
  //       .send(userdetails)
  //       .end((err, res) => {
  //         newResetToken = res.body.data;
  //         expect(res.statusCode).to.be.equal(200);
  //         done();
  //       });
  //   });
  // });

  //create notes
  //  describe('POST /notes', () => {
  //   it('given user details notes created 200', (done) => {
  //     const userdetails = {
  //       Title: 'television',
  //       Description: 'smart television'
  //     };
  //     request(app)
  //       .post('/api/v1/notes')
  //       .send(userdetails)
  //       .set('Authorization', `bearer ${jwtToken}`)
  //       .end((err, res) => {
  //         //noteId = res.body.data ;
  //        // console.log("NoteId create notes=========> ", noteId)
  //         expect(res.statusCode).to.be.equal(HttpStatus.OK);

  //       });
  //     done();
  //    });
    // it('given user details not created notes 400', (done) => {
    //   const userdetails = {
    //     Title: 'music',
    //     Description: 'all instrument'
    //   };
    //   request(app)
    //     .post('/api/v1/notes')
    //     .send(userdetails)
    //     .set('authorization', ` ${jwtToken}`)
    //     .end((err, res) => {
    //       //noteId = res.body.data._id;
    //       //console.log("NoteId create notes=========> ", noteId)
    //       expect(res.statusCode).to.be.equal(HttpStatus.BAD_REQUEST);

    //     });
    //   done();
    // });
  //});

  // //get all notes 
  // describe('GET /notes', () => {
  //   it('Given user login details should fetch saved notes', (done) => {
  //     request(app)
  //       .get('/api/v1/notes')
  //       .set('authorization', `bearer ${jwtToken}`)
  //       .end((err, res) => {
  //         expect(res.statusCode).to.be.equal(HttpStatus.OK);

  //       });
  //     done();
  //   });
  // });

  // //get  notes by id 
  // describe('GET /notes', () => {
  //   it('Given user id deatails fetch notes', (done) => {
  //     request(app)
  //       .get(`/api/v1/notes/${noteId}`)
  //       .set('authorization', `bearer ${jwtToken}`)
  //       .end((err, res) => {
  //         expect(res.statusCode).to.be.equal(HttpStatus.OK);

  //       });
  //     done();
  //   });
  // });

  // //Update a Note
  // describe('PUT /updateNote', () => {
  //   it('given the note id of a user should update the note', (done) => {
  //     const userdetails = {
  //       Title: 'Fan',
  //       Description: 'All fan'
  //     };
  //     request(app)
  //       .put(`/api/v1/notes/${noteId}`)
  //       .send(userdetails)
  //       .set('authorization', `bearer ${jwtToken}`)
  //       .end((err, res) => {
  //         expect(res.statusCode).to.be.equal(HttpStatus.ACCEPTED);

  //       });
  //     done();
  //   });
  // });

  // //Delete a Note
  // describe('Delete /deleteNote', () => {
  //   it('given the note id of a user should delete the note', (done) => {
  //     request(app)
  //       .delete(`/api/v1/notes/${noteId}`)
  //       .set('authorization', `bearer ${jwtToken}`)
  //       .end((err, res) => {
  //         expect(res.statusCode).to.be.equal(HttpStatus.OK);

  //       });
  //       done();
  //   });
  // });

