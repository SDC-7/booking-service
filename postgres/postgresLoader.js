const dbConfig = require('./psqlconfig.js');

(async () => {
  await dbConfig.client.connect();
  await dbConfig.client.query("COPY listings (host, rating, raters, price, discount) FROM '/Users/cinziaborello/hackreactor/SDC-LAirbnb/booking-service/listings.csv' WITH CSV HEADER;");
  console.log('done');
  await dbConfig.client.end();
})();

// INSERT INTO listings (host, rating, raters, price, discount) VALUES ('Cinzia', 3.12, 19, 150, 10);

// COPY listings (host, rating, raters, price, discount) FROM '/Users/cinziaborello/hackreactor/SDC-LAirbnb/booking-service/listingsTest.csv' WITH CSV HEADER;