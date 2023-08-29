const { sequelize } = require("./databaseConnection");

// Synchronize models with the database
const synchronizeDatabase = async () => {
  try {
    await sequelize.sync();
    console.log("Database synchronized with models");
  } catch (error) {
    console.log("Error synchronizing database:", error);
  }
};

synchronizeDatabase();

module.exports = synchronizeDatabase;
