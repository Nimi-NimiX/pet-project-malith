const { sequelize } = require('./databaseConnection');
const User = require('../models/usersModel');
const Company = require('../models/companyModel');
const CompanyPaySlipInfo = require('../models/companyPaySlipInfoModel');

// Synchronize models with the database
const synchronizeDatabase = async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized with models');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

synchronizeDatabase();

module.exports = synchronizeDatabase;
