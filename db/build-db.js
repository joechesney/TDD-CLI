import sqlite3 from sqlite3;
import faker from faker;

const trainingProgramDB = new sqlite3.Database("./db.sqlite");

const createDatabase = () =>{
  trainingProgramDB.serialize(()=>{
    trainingProgramDB.run(`DROP TABLE IF EXISTS TrainingPrograms`);
    trainingProgramDB.run(`CREATE TABLE IF NOT EXISTS TrainingPrograms 
      ( 
        no_of_seats
        instructor_name
        start_date
        end_date
        course_category
      )`
    );// end of create
    for(let i = 0;  i < 25; i++){

    }
  });
};