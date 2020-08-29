INSERT INTO listings (host, rating, raters, price, discount) VALUES ('Cinzia', 3.22, 18, 140, 20);

COPY listings (host, rating, raters, price, discount) FROM '/Users/cinziaborello/hackreactor/SDC-LAirbnb/booking-service/listingsTest.csv' WITH CSV HEADER;