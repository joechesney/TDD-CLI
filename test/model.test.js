
// some lit destructuring
const { assert:{ isFunction , typeOf } } = require('chai');

describe("MODEL FUNCTION TESTS ", ()=>{
  
  let { getAll, getOne, deleteOne, updateAdd } = require('../models/model');
  
  it("all model functions should be functions",()=>{
    isFunction(getAll, "function");
    isFunction(getOne, "function");
    isFunction(deleteOne, "function");
    isFunction(updateAdd, "function");
  });

  it("all model functions should return a promise",()=>{
    typeOf(getAll().catch(err=>{}), "promise");
    typeOf(getOne(5).catch(err=>{}), "promise");
    typeOf(deleteOne(6).catch(err=>{}), "promise");
    typeOf(updateAdd(null, {}).catch(err=>{}), "promise");
  });

});


