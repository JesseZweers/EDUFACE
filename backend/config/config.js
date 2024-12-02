require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  dbPath: process.env.DB_PATH || './db/jobs.db',
  apiJsonPath: process.env.API_JSON_PATH || './api/jobs.json',
};