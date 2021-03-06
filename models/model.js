
const sqlite3 = require("sqlite3");
const trainingProgramDB = new sqlite3.Database('../db.sqlite');

module.exports.getAll = () =>
  new Promise((resolve, reject)=>
    trainingProgramDB.get(`SELECT * FROM "TrainingPrograms"`, 
    (err,data)=> err ? reject(err):resolve(data))
  );

module.exports.getOne= (id)=>
  new Promise((resolve, reject)=>
    trainingProgramDB.get(`SELECT * FROM TrainingPrograms WHERE training_program_id = ${id}`, (err,data)=> err?reject(err):resolve(data))
  );

module.exports.deleteOne = (id)=>
  new Promise((resolve, reject)=>
    trainingProgramDB.run(`DELETE FROM TrainingPrograms WHERE training_program_id = ${id}`, function(err){
      err?reject(err):resolve(this.changes);
    })
  );

module.exports.updateAdd = (id, {no_of_seats, instructor_name, start_date, end_date, course_category})=>
  new Promise((resolve, reject)=>
    trainingProgramDB.run(`REPLACE INTO TrainingPrograms (
      training_program_id,
      no_of_seats,
      instructor_name,
      start_date,
      end_date,
      course_category
    ) VALUES (
      ${id== undefined ? null : id},
      ${no_of_seats},
      ${instructor_name},
      ${start_date},
      ${end_date},
      ${course_category}
    )`, function(err){
      return this.lastID;
    })
);