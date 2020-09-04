const dbConfig = require('./config.js');

(async () => {
  await dbConfig.client.connect();
  await dbConfig.client.query(`COPY listings (id, host, rating, raters, price, discount) FROM '${pathname}/listings.csv' WITH CSV HEADER;`);
  console.log('done');
  await dbConfig.client.end();
})();

/*  Load the data to Postgres from terminal by typing:
 *    npm run load
*/
