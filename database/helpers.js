const mariadb = require('mariadb');
const { dbConnectionOptions } = require('./login');

const queryTableDataFromID = (id, tableName, callback) => {
  let conn;
  mariadb.createConnection(dbConnectionOptions)
    .then((connection) => {
      let queryString;
      conn = connection;
      if (tableName === 'listings') {
        queryString = `SELECT * from listings WHERE (id=${id})`;
      } else if (tableName === 'unavailableDates') {
        queryString = `SELECT * from unavailableDates WHERE (id_listings=${id})`;
      }
      return conn.query(queryString);
    })
    .then((results) => {
      conn.close();
      callback(null, results);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = {
  queryTableDataFromID,
};
