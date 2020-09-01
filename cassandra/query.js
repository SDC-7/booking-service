const dbConfig = require('./cqlconfig.js');

const getListingById = (id) => {
  const queryString = `SELECT * FROM listings WHERE id = ${id};`;
  return new Promise((resolve, reject) => {
    dbConfig.client.execute(queryString, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data.first());
    });
  });
};

module.exports = {
  getListingById,
};
