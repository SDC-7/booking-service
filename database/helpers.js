const mariadb = require('mariadb');
const { dbConnectionOptions } = require('./login');

const queryTableDataFromID = (id, tableName, callback) => {
  mariadb.createConnection(dbConnectionOptions)
    .then((conn) => {
      let queryString;
      if (tableName === 'listings') {
        queryString = `SELECT * from listings WHERE (id=${id})`;
      } else if (tableName === 'unavailableDates') {
        queryString = `SELECT * from unavailableDates WHERE (id_listings=${id})`;
      }
      return conn.query(queryString);
    })
    .then((results) => {
      callback(null, results);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = {
  queryTableDataFromID,
};
