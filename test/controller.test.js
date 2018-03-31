describe("controller function tests", ()=>{
  // getAllFunctions
  it("should return all the training programs listed in the database",()=>{
    let { getAllTrainingPrograms } = require('../controllers/controller');
    getAllTrainingPrograms()
  });

  // getOne function
  it("getOne should return a single object", ()=>{
    let { getOne } = require('../models/model');
    assert.isObject(getOne)
  })// this is not ready. change it to the controller function

  let newTrainingProgram = {
  no_of_seats: 30,
  instructor_name: "Gerrard",
  start_date: "March 31",
  end_date: "never",
  course_category: "suffering"
  } // use this to test the updateAdd controller function maybe?
});