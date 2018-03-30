const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');

const trainingProgramDB = new sqlite3.Database("./db.sqlite");

module.exports.createDatabase = () =>{
  trainingProgramDB.serialize(()=>{
    trainingProgramDB.run(`DROP TABLE IF EXISTS TrainingPrograms`);
    trainingProgramDB.run(`CREATE TABLE IF NOT EXISTS TrainingPrograms 
      ( 
        training_program_id INTEGER PRIMARY KEY,
        no_of_seats INTEGER,
        instructor_name TEXT,
        start_date TEXT,
        end_date TEXT,
        course_category TEXT
      )`
    );// end of create
    for(let i = 0;  i < 25; i++){
      trainingProgramDB.run(`
        INSERT INTO TrainingPrograms 
        VALUES(
          ${i},
          ${faker.random.number({min:10, max:50})},
          "${faker.name.firstName()}",
          "${faker.date.past(5)}",
          "${faker.date.future(3)}",
          "${faker.commerce.department()}"
        )
      `);
    }
  });
};
