// backend/index.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 5001;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dashboard_db",
  password: "&qc$-N4Rv-Af0-@fUoP",//process.env.DB_PASSWORD,
  port: 5432
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));


app.use(cors());  // Allow cross-origin requests

app.get('/api', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
