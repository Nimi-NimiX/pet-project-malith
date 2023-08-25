const Pool = require("pg").Pool;
const logger = require("../utils/logger");

//CREATE INSTANCE OF POOL

const pool = new Pool({
  user: "postgres",
  password: "malith96",
  host: "localhost",
  port: 5432,
  database: "perntodo",
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

//call connectToDatabase function
connectToDatabase();

//export
module.exports = pool;
