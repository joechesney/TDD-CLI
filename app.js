
const {createDatabase} = require('./db/build-db');
const prompt = require('prompt');
createDatabase();

prompt.start();

const greet = {
  properties: {
    choice:{
      message: `
      Welcome the the Bangazon Continuing Ed Course Creator
      Please choose an action from the following:
        1 create a new course
        2 edit an existing course
        3 remove a course
        4 view an upcoming course
        5 view all upcoming courses
        6 view a past course
        7 view all past courses
      `
    }
  }
};

const createCourse = {
  // each of these needs restrictions
  properties: {
    course:{
      message: `Enter the course name`
    },
    instructor:{
      message: `Enter the instructor name`
    },
    startDate:{
      message: `Enter the start date`
    },
    endDate:{
      message: `Enter the end date`
    },
    seats:{
      message: `Enter the number of seats`
    }
  }
};

prompt.get(greet, (err, result)=>{

  // Create New Course
  result.choice == 1? prompt.get(createCourse, (err,result)=>{
    console.log('new course:',result);
    // call function that creates new course and adds to the database. 
    // send it the object with the new course info as a parameter
  }):console.log("nah son");

  //Edit Existsing Course
  result.choice == 2? prompt.get(editCourse, (err,result)=>{
    // This one needs to ask for the course id,
    // then get that course from the database, if it exists
    // then display the existing course on the screen
    // and allow the user to edit the values then send it back
  }):console.log("nah son");
});
