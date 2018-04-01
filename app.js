
const { createDatabase } = require('./db/build-db');
const prompt = require('prompt');
const {
  getAllTrainingPrograms,
  getOneTrainingProgram } =
  require('./controllers/controller');
// createDatabase();


prompt.start();

const greet = {
  properties: {
    choice: {
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
    course: {
      message: `Enter the course name`
    },
    instructor: {
      message: `Enter the instructor name`
    },
    startDate: {
      message: `Enter the start date`
    },
    endDate: {
      message: `Enter the end date`
    },
    seats: {
      message: `Enter the number of seats`
    }
  }
};

const editCourse = {
  // each of these needs restrictions
  properties: {
    course_id: {
      message: `Enter the course id`
    }
  }
};

prompt.get(greet, (err, result) => {
  
  switch (+result.choice) {

    // Create New Course
    case 1:
      prompt.get(createCourse, (err, result) => {
        console.log('new course:', result);
        // call function that creates new course and adds to the database. 
        // send it the object with the new course info as a parameter
      });
      break;

    // Edit Existing Course
    case 2:
      prompt.get(editCourse, (err, result) => {
        
        // This one needs to ask for the course id,
        // then get that course from the database, if it exists
        // then display the existing course on the screen
        // and allow the user to edit the values then send it back
      });
    break;
    
    // Delete a course
    case 3:
      prompt.get(removeCourse, (err, result) => {
        // This one needs to ask for the course id,
        // then send that id to a function that deletss from db
      });
    break;

    // View an upcoming course
    case 4:
      prompt.get(viewUpcomingCourse, (err, result) => {
        // Not sure what this does lol
      });
    break;

    // View all upcoming courses
    case 5:
      prompt.get(viewAllUpcomingCourses, (err, result) => {
        // Not sure what this does lol
      });
    break;

    // View a past course
    case 6:
      prompt.get(viewPastCourse, (err, result) => {
        // Not sure what this does lol
      });
    break;

    // View all past courses
    case 7:
      prompt.get(viewAllPastCourses, (err, result) => {
        // Not sure what this does lol
      });
    break;

    default:
      console.log('nah son');
      break;
  }
  


  
  
});
