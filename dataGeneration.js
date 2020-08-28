const faker = require('faker');

const host = faker.name.firstName();
const rating = (Math.random() * (5.00 - 2.00) + 2.00).toFixed(2);
const raters = faker.random.number({ min: 3, max: 3333 });
const price = faker.random.number({ min: 70, max: 1700 });
const discount = faker.random.number({ min: 0, max: 50 });

console.log(host, rating, raters, price, discount);