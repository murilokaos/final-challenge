require('dotenv').config();

const databaseConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'meetapp_murilo',
  dialect: 'postgres',
};

module.exports = databaseConfig;
