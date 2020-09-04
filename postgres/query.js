// const dbConfig = require('./config.js');
const dbConfig = require('./psqlconfig.js');

dbConfig.client.connect();

const getListingById = (id) => {
  const queryString = `SELECT * FROM listings WHERE id = ${id};`;
  return new Promise((resolve, reject) => {
    dbConfig.client.query(queryString, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data.rows[0]);
    });
  });
};

module.exports = {
  getListingById,
};
