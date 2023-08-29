const { sequelize } = require("./databaseConnection");
const User = require("../models/usersModel");

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
