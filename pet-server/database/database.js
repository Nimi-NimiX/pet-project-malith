const Pool = require("pg").Pool;
const logger = require("../utils/logger");
require("dotenv").config();

//CREATE INSTANCE OF POOL

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Test the database connection
const connectToDatabase = async () => {
  try {
    const client = await pool.connect();
    logger.info("Connected to the database");
    client.release(); // Release the client back to the pool
  } catch (error) {
    logger.info("Error connecting to the database:", error);
  }
};

//call connectToDatabase function()
connectToDatabase();

//export
module.exports = {
  pool,
  connectToDatabase,
};
