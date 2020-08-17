const mariadb = require('mariadb');
const { dbConnectionOptions } = require('./login');

const queryTableDataFromID = (id, callback) => {
  let conn;
  mariadb.createConnection(dbConnectionOptions)
    .then((connection) => {
      conn = connection;
      const queryString = `SELECT * from listings WHERE (id=${id})`;
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
