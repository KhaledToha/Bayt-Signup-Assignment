const { Pool } = require('pg');
require('dotenv').config();

const { DB_URL } = process.env;

const connection = new Pool({
  connectionString: DB_URL,
  ssl: false,
});

module.exports = connection;
