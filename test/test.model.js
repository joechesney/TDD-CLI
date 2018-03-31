
// const mocha = require('mocha');
const { assert } = require('chai');

describe("MODEL FUNCTION TESTS ", ()=>{
  
  let { getAll } = require('../models/model');
  it("getAll should return a promise",()=>{
    assert.typeOf(getAll().catch(err=>{}), "promise");
  });
});

// describe("controller function tests", ()=>{
//   // getAllFunctions
//   let { getAllTrainingPrograms } = require('../controllers/controller');
//   it("should return all the training programs listed in the database",()=>{
//     getAllTrainingPrograms()
//   });
// });