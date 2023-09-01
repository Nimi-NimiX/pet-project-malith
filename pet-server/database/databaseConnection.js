const { Sequelize } = require('sequelize');
const logger = require('../utils/logger');
require('dotenv').config();

// Create a new Sequelize instance
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
});

// Test the database connection
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected successfully to the database');
  } catch (error) {
    console.log('Error connecting to the database:', error);
  }
};

// Call connectToDatabase function()
connectToDatabase();

//export
module.exports = {
  sequelize,
  connectToDatabase,
};
