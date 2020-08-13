const faker = require('faker');
const mariadb = require('mariadb');
const { dbConnectionOptions } = require('./login');

const numberOfMockListings = 100;

const seedData = () => {
  const promiseArr = [];
  // create connection to db
  mariadb.createConnection(dbConnectionOptions)
    .then((conn) => {
      for (let i = 0; i < numberOfMockListings; i += 1) {
        // generate mock data for listings table for one listing
        const rating = (4 * Math.random() + 1);
        const mockListing = {
          ownerName: faker.name.firstName(),
          rating: rating.toFixed(2),
          numRatings: faker.random.number({ min: 5, max: 50 }),
          pricePerNight: faker.random.number({ min: 100, max: 1500 }),
          minStayLength: faker.random.number({ min: 1, max: 7 }),
          discountAmount: (faker.random.number({ min: 1, max: 2 }) === 1)
            ? faker.random.number({ min: 1, max: 50 })
            : 0,
          discountDescription: faker.lorem.sentence(),
        };
        // craft query string from mock data
        const queryStringListing = `INSERT INTO listings (ownerName, rating, numRatings, pricePerNight, minStayLength, discountAmount, discountDescription) VALUES ('${mockListing.ownerName}', '${mockListing.rating}', '${mockListing.numRatings}', '${mockListing.pricePerNight}', '${mockListing.minStayLength}', '${mockListing.discountAmount}', '${mockListing.discountDescription}');`;
        // push promise of querying to promise arr
        promiseArr.push(conn.query(queryStringListing));

        // mock data for unavailable dates table for one listing (i)
        for (let j = 0; j < Math.ceil(5 * Math.random()); j += 1) {
          const mockUD = {
            year: 2020,
            month: 8,
            day: faker.random.number({ min: 1, max: 31 }),
          };

          const queryStringUD = `INSERT INTO unavailableDates (year, month, day, id_listings) VALUES ('${mockUD.year}', '${mockUD.month}', '${mockUD.day}', '${i + 1}');`;

          promiseArr.push(conn.query(queryStringUD));
        }
      }
    })
    .catch((err) => {
      console.error(`Error creating connection to database: ${err}`);
    });

  Promise.all(promiseArr)
    .then(() => {
      console.log('Successfully entered data into database');
    })
    .catch((err) => {
      console.error(`Error inserting into database: ${err}`);
    });
};

seedData();

module.exports = {
  seedData,
};
