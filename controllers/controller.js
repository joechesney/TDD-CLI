
const { getAll,
        getOne,
        deleteOne,
        updateAdd } = require("../models/model");

module.exports.getAllTrainingPrograms = (id) => {
  getAll(id)
  .then((trainingPrograms)=> trainingPrograms);
};

module.exports.getOneTrainingProgram = (id) => 
  getOne(id)
  .then((trainingProgram)=> trainingProgram);
;