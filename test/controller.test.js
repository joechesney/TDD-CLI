
const { assert: { isObject, isArray } } = require('chai');

describe("controller function tests", ()=>{

  before(()=>{
    let newTrainingProgram = {
      no_of_seats: 30,
      instructor_name: "Gerrard",
      start_date: "March 31",
      end_date: "never",
      course_category: "suffering"
    } // use this to test the updateAdd controller function maybe?
  });
  
  // getAllFunctions
  it("should return all the training programs listed in the database",()=>{
    let { getAllTrainingPrograms } = require('../controllers/controller');
    getAllTrainingPrograms()
    .then(tps=>{
      isArray(tps);
      isObject(tps[1]);
    });
  });

  // getOne function
  it("getOne should return a single object", ()=>{
    let { getOneTrainingProgram } = require('../controllers/controller');
    getOneTrainingProgram(3)
    .then(tp=> isObject(tp));
  });


});