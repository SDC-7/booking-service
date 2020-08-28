const faker = require('faker');
const fs = require('fs');

const stream = fs.createWriteStream('listings.csv');

const createOneListing = () => {
  const host = faker.name.firstName();
  const rating = (Math.random() * (5.00 - 2.00) + 2.00).toFixed(2);
  const raters = faker.random.number({ min: 3, max: 3333 });
  const price = faker.random.number({ min: 70, max: 1700 });
  const discount = faker.random.number({ min: 0, max: 50 });

  return `${host},${rating},${raters},${price},${discount}\n`;
}

const startWriting = (writeStream, encoding, done) => {
  let i = 10000000;
  function writing() {
    let canWrite = true;
    while (i > 0 && canWrite) {
      i--;
      let listing = createOneListing();

      if (i === 0){
        writeStream.write(listing, encoding, done);
      } else {
        writeStream.write(listing, encoding);
      }
    }

    if(i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
}

stream.write(`host,rating,raters,price,discount\n`, 'utf-8');
startWriting(stream, 'utf-8', () => {
  stream.end();
});