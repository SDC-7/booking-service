const express = require('express');
const path = require('path');
const db = require('../database/helpers');

const app = express();
const port = 3002;

app.use('/(:id)', express.static(path.join(__dirname, '../public')));

app.get('/api/booking/:id', (req, res) => {
  const { id } = req.params;
  db.queryTableDataFromID(id, 'listings', (listingErr, listing) => {
    if (listingErr) {
      console.error(`Error querying listing in database: ${listingErr}`);
      res.status(500).send(listingErr);
    } else {
      db.queryTableDataFromID(id, 'unavailableDates', (udErr, unavailableDates) => {
        if (udErr) {
          console.error(`Error querying unavailable dates in database: ${udErr}`);
          res.status(500).send(udErr);
        } else {
          res.status(200).send({
            listing,
            unavailableDates,
          });
        }
      });
    }
  });
});

app.listen(port);
console.log('Now listening on port ', port);
