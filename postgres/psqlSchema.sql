CREATE DATABASE lairbnbbooking;

\c lairbnbbooking;

CREATE TABLE IF NOT EXISTS listings (
  id SERIAL PRIMARY KEY,
  host VARCHAR(20),
  rating FLOAT,
  raters INT,
  price INT,
  discount INT
);

/*  Create the schema from terminal by typing:
 *    npm run schema
*/