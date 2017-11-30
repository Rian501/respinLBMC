'use strict';
let queryInterface = require('sequelize/lib/query-interface');

// const { insertEmailsIntoDB, searchByContactId, prepEmailData, 
// 	// uploadFileToDB 
// } = require('./Message.js');
// const {uploadFileToDB} = require('./MessageUpload.js');

let postEmailData = (req, res, next) => {
	const queryInterface = require("sequelize/lib/query-interface");
	const Email = req.app.get("models");
	Email.bulkCreate(req.body)
	.then( (data) => {
		console.log("Data??", data);
		res.status(200).json(data);
	})
	.catch( (err) => next(err));
};


let getMessagesByContactId = (req, res, next) => {
	searchByContactId(req.params.id)
	.then( (results) => {
		//do something with results-- send to front end for usable form, they will just be JSON so far
		res.status(200).json(results);
	})
	.catch( (err) => next(err));
};

let uploadFileFromWeb = (req, res, next) => {
	const Email = req.app.get("models");
	console.log('req.body', req.body);
	let readyStuff =  fixJson(req.body);
	console.log("readyStuff", readyStuff);
	Email.bulkCreate(readyStuff, { fields: ['Clicked', 'Contact_ID'] })
	.then(results => {
		console.log("resutls??", results);
		//do something with results-- send to front end for usable form, they will just be JSON so far
		//try stdwrite?
		res.status(200).json(results);
	})
	.catch(err => next(err));
};

//from https://stackoverflow.com/questions/33438857/how-can-i-replace-spaces-in-a-json-object-keys-dynamically-using-javascript
function fixJson (arr) {
arr.forEach(function(e, i) {
  // Iterate over the keys of object
  Object.keys(e).forEach(function(key) {
    // Copy the value
    var val = e[key],
      newKey = key.replace(/\s+/g, "_");

    // Remove key-value from object
    delete arr[i][key];

    // Add value with new key
    arr[i][newKey] = val;
  });
});

console.log(arr);
return arr
};

// let prepData = prepEmailData;

module.exports = { getMessagesByContactId, 
	// prepData, 
	postEmailData, uploadFileFromWeb }
