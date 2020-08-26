const mysql = require('mysql');
const dbConfig = require('./dbconfig.js');

const connection = mysql.createConnection(dbConfig);
connection.connect();

const queryTableDataFromID = (id) => {
  const queryString = `SELECT * from listings WHERE id = ?;`;
  const args = [id];
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
  queryTableDataFromID,
};
