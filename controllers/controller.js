
const { getAll,
        getOne,
        deleteOne,
        updateAdd } = require("../models/model");

module.exports.getAllTrainingPrograms = (id) => {
  getAll(id)
  .then((trainingPrograms)=> trainingPrograms);
};