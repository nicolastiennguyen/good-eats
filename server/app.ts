import express from 'express';
import axios from 'axios';
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { Client } = require('pg');

const client = new Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

connect();
async function connect() {
  try {
    await client.connect();
    console.log('connected');
  } catch (err) {
    console.error(err);
  }
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
  next();
});

app.get('/yelp/:location/:limit', (req, res) => {
  axios
    .get(`https://api.yelp.com/v3/businesses/search`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_TOKEN}`,
      },
      params: {
        location: req.params.location,
        limit: req.params.limit,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/businesses', async (req, res) => {
  try {
    const results = await client.query('select * from businesses');
    res.json(results.rows);
  } catch (err) {
    console.log(err);
  }
});

app.post('/businesses', async (req, res) => {
  const { id, name, image_url, url, rating, price, location } = req.body;
  try {
    await client.query(
      'INSERT INTO businesses VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (id) DO NOTHING',
      [id, name, image_url, url, rating, price, location]
    );
    console.log('inserted into database');
  } catch (err) {
    console.log(err);
  }
});

let PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
