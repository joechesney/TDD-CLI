
// const mocha = require('mocha');
const { assert } = require('chai');

describe("MODEL FUNCTION TESTS ", ()=>{
  
  let { getAll, getOne, deleteOne, updateAdd } = require('../models/model');
  
  it("all model functions should be functions",()=>{
    assert.isFunction(getAll, "function");
    assert.isFunction(getOne, "function");
    assert.isFunction(deleteOne, "function");
    assert.isFunction(updateAdd, "function");
  });

  it("all model functions should return a promise",()=>{
    assert.typeOf(getAll().catch(err=>{}), "promise");
    assert.typeOf(getOne(5).catch(err=>{}), "promise");
    assert.typeOf(deleteOne(6).catch(err=>{}), "promise");
    assert.typeOf(updateAdd(null, {}).catch(err=>{}), "promise");
  });

});


