"use strict";
const app = require('./nodeApp');

module.exports.uploadFileToDB = (body) => {
  Email.bulkCreate(body)
  .then( (results) =>{
    console.log('results???', results);
  })
};