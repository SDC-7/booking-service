const dbConfig = require('./psqlconfig.js');

(async () => {
  await dbConfig.client.connect();
  await dbConfig.client.query("COPY listings (id, host, rating, raters, price, discount) FROM '/Users/cinziaborello/hackreactor/SDC-LAirbnb/booking-service/listings.csv' WITH CSV HEADER;");
  console.log('done');
  await dbConfig.client.end();
})();

/*  Load the data to Postgres from terminal by typing:
 *    npm run load
*/
