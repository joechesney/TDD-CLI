
const {createDatabase} = require('./db/build-db');
const prompt = require('prompt');
createDatabase();

prompt.start();

const schema = {
  properties: {
    name:{
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "name must only be leters, spaces, or dashes, bruh",
      required: true
    },
    password:{
      hidden: true
    }
  },
};

prompt.get(schema, (err, result)=>{
  console.log('input received');
  console.log( result.name);
  console.log( result.password);
});
