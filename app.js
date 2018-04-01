
const {createDatabase} = require('./db/build-db');
const prompt = require('prompt');
createDatabase();

prompt.start();

const schema = {
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

prompt.get(schema, (err, result)=>{
  console.log('input received!');
  console.log( result.choice);
});
