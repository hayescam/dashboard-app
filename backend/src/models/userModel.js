// models/UserModel.js
const pool = require('../config/database');

const User = {
  findAll: async () => {
    const { rows } = await pool.query('SELECT * FROM users');
    return rows;
  },
  create: async (userData) => {
    const { username, email } = userData;
    const { rows } = await pool.query(
      'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
      [username, email]
    );
    return rows[0];
  },
  // additional methods for user management
};

module.exports = User;

