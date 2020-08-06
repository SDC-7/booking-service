CREATE DATABASE IF NOT EXISTS fecBookingDatabase;

USE fecBookingDatabase;

DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS unavailableDates;
DROP TABLE IF EXISTS bookings;

CREATE TABLE IF NOT EXISTS listings (
  id INT NOT NULL AUTO_INCREMENT,
  ownerName VARCHAR(50) NOT NULL,
  rating INT NOT NULL,
  pricePerNight INT NOT NULL,
  minStayLength INT NOT NULL,
  discountAmount INT,
  discountDescription VARCHAR(200),
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

CREATE TABLE IF NOT EXISTS bookings (
  id INT NOT NULL AUTO_INCREMENT,
  yearStart INT NOT NULL,
  monthStart INT NOT NULL,
  dayStart INT NOT NULL,
  yearEnd INT NOT NULL,
  monthEnd INT NOT NULL,
  dayEnd INT NOT NULL,
  numGuests INT NOT NULL,
  id_listings INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_listings) REFERENCES listings(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

