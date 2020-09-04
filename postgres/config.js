const { Client } = require('pg');

const client = new Client({
  host: '',
  user: '',
  password: '',
  database: 'lairbnbbooking',
});

module.exports = {
  client,
};
