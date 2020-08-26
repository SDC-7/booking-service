const faker = require('faker');
const mysql = require('mysql');
const dbConfig = require('./dbconfig.js');

const numberOfMockListings = 100;

const connection = mysql.createConnection(dbConfig);
connection.connect();

const seedData = () => {
  for (let i = 0; i < numberOfMockListings; i += 1) {
    // generate mock data for listings table for one listing
    const rating = (4 * Math.random() + 1);
    const mockListing = {
      ownerName: faker.name.firstName(),
      rating: rating.toFixed(2),
      numRatings: faker.random.number({ min: 5, max: 50 }),
      pricePerNight: faker.random.number({ min: 100, max: 1500 }),
      discountAmount: (faker.random.number({ min: 1, max: 2 }) === 1)
        ? faker.random.number({ min: 1, max: 50 })
        : 0,
    };

    const queryStringListing = `INSERT INTO listings (ownerName, rating, numRatings, pricePerNight, discountAmount) VALUES ('${mockListing.ownerName}', '${mockListing.rating}', '${mockListing.numRatings}', '${mockListing.pricePerNight}', '${mockListing.discountAmount}');`;

    connection.query(queryStringListing, (err, success) => {
      if (err) {
        console.log(`Error creating connection to database: ${err}`);
      } else {
        console.log('Successfully entered data into database', success);
      }
    });
  }
};

seedData();

module.exports = {
  seedData,
};
