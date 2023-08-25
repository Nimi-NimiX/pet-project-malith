const Pool = require("pg").Pool;

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
    console.log("Connected to the database");
    client.release(); // Release the client back to the pool
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

//call connectToDatabase function
connectToDatabase();

//export
module.exports = pool;
