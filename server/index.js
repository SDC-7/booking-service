const express = require('express');
const path = require('path');
const db = require('../database/helpers');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/(:id)', express.static(path.join(__dirname, '../public')));

app.get('/api/booking/:id', (req, res) => {
  const args = req.params.id;
  return db.getListingById(args)
    .then((listing) => {
      res.status(200).send(listing);
    })
    .catch(() => {
      res.status(500).send(`Error querying listing in database`);
    });
});

app.post('/api/booking/', (req, res) => {
  const args = [req.body.ownerName, req.body.rating, req.body.numRatings, req.body.pricePerNight, req.body.discountAmount];
  return db.postNewListing(args)
    .then(() => {
      res.status(200).send(`Success creating a new listing in database`);
    })
    .catch(() => {
      res.status(500).send(`Error creating a new listing in database`);
    });
});

app.put('/api/booking/:id', (req, res) => {
  const args = [req.body.ownerName, req.body.rating, req.body.numRatings, req.body.pricePerNight, req.body.discountAmount, req.params.id];
  return db.updateListing(args)
    .then(() => {
      res.status(200).send(`Success updating listing in database`);
    })
    .catch(() => {
      res.status(500).send(`Error updating listing in database`);
    });
});

app.get('/assets/airbnb_rating_star.png', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/assets/airbnb_rating_star.png'));
});

app.listen(port);
console.log('Now listening on port ', port);
