const dbConfig = require('./cqlconfig.js');

// this is just a test query
const query = 'SELECT * FROM listings WHERE id = 1;';

dbConfig.client.execute(query, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result.first());
  }
});

/*  Load the data to Cassandra by logging into your cluster using cqlsh:
 *    USE lairbnbbooking;
 *    COPY listings (id, host, rating, raters, price, discount) FROM '/Users/cinziaborello/hackreactor/SDC-LAirbnb/booking-service/listings.csv' WITH HEADER = TRUE;
*/
