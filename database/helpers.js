const mysql = require('mysql');
const dbConfig = require('./dbconfig.js');

const connection = mysql.createConnection(dbConfig);
connection.connect();

const getListingById = (args) => {
  const queryString = `SELECT * from listings WHERE id = ?;`;
  return new Promise((resolve, reject) => {
    connection.query(queryString, args, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};

const postNewListing = (args) => {
  const queryString = `INSERT INTO listings (ownerName, rating, numRatings, pricePerNight, discountAmount) VALUES (?, ?, ?, ?, ?);`;
  return new Promise((resolve, reject) => {
    connection.query(queryString, args, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};

const updateListing = (args) => {
  const queryString = `UPDATE listings SET ownerName = ?, rating = ?, numRatings = ?, pricePerNight = ?, discountAmount = ? WHERE id = ?;`;
  return new Promise((resolve, reject) => {
    connection.query(queryString, args, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};


module.exports = {
  getListingById,
  postNewListing,
  updateListing,
};
