// const Pool = require("pg").Pool;
// const logger = require("../utils/logger");

// //CREATE INSTANCE OF POOL

// const pool = new Pool({
//   user: "postgres",
//   password: "malith96",
//   host: "localhost",
//   port: 5432,
//   database: "petapp",
// });

// // Test the database connection
// const connectToDatabase = async () => {
//   console.log("Before connecting to the database");
//   try {
//     const client = await pool.connect();
//     console.log("Connected to the database");
//     client.release(); // Release the client back to the pool
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   }
// };

// //call connectToDatabase function()
// connectToDatabase();

// //export
// module.exports = {
//   pool,
//   connectToDatabase,
// };
