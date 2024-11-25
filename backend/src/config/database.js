const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_user_name',
  host: 'localhost',
  database: 'dashboard_db',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;

