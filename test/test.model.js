
// const mocha = require('mocha');
const { assert } = require('chai');

describe("MODEL FUNCTION TESTS ", ()=>{
  
  let { getAll, getOne, deleteOne, updateAdd } = require('../models/model');
  it("getAll should return a promise",()=>{
    assert.typeOf(getAll().catch(err=>{}), "promise");
    assert.typeOf(getOne(5).catch(err=>{}), "promise");
    assert.typeOf(deleteOne(6).catch(err=>{}), "promise");
    assert.typeOf(updateAdd(null, {}).catch(err=>{}), "promise");
  });

});


// describe("controller function tests", ()=>{
//   // getAllFunctions
//   let { getAllTrainingPrograms } = require('../controllers/controller');
//   it("should return all the training programs listed in the database",()=>{
//     getAllTrainingPrograms()
//   });
    // let { getOne } = require('../models/model');
    //   it("getOne should return a single object", ()=>{
    //     assert.isObject(getOne)
    //   })// this is not ready. change it to the controller function

        // let newTrainingProgram = {
    //   no_of_seats: 30,
    //   instructor_name: "Gerrard",
    //   start_date: "March 31",
    //   end_date: "never",
    //   course_category: "suffering"
    // } // use this to test the updateAdd controller function maybe?
// });