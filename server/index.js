const express = require('express');
const path = require('path');
const db = require('../database/helpers');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/(:id)', express.static(path.join(__dirname, '../public')));

app.get('/api/booking/:id', (req, res) => {
  const { id } = req.params;
  db.queryTableDataFromID(id, (listingErr, listing) => {
    if (listingErr) {
      console.error(`Error querying listing in database: ${listingErr}`);
      res.status(500).send(listingErr);
    } else {
      res.status(200).send({
        listing,
      });
    }
  });
});

app.get('/assets/airbnb_rating_star.png', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/assets/airbnb_rating_star.png'));
});

app.listen(port);
console.log('Now listening on port ', port);
