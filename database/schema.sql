-- DROP DATABASE IF EXISTS fecBookingDatabase;
CREATE DATABASE IF NOT EXISTS fecBookingDatabase;

USE fecBookingDatabase;

DROP TABLE IF EXISTS unavailableDates;
DROP TABLE IF EXISTS listings;

CREATE TABLE IF NOT EXISTS listings (
  id INT NOT NULL AUTO_INCREMENT,
  ownerName VARCHAR(50) NOT NULL,
  rating FLOAT NOT NULL,
  numRatings INT NOT NULL,
  pricePerNight INT NOT NULL,
  minStayLength INT NOT NULL,
  discountAmount INT,
  discountDescription VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS unavailableDates (
  id INT NOT NULL AUTO_INCREMENT,
  year INT NOT NULL,
  month INT NOT NULL,
  day INT NOT NULL,
  id_listings INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_listings) REFERENCES listings(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);
