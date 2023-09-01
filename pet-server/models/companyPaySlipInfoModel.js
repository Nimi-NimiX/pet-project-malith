const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/databaseConnection');
const Company = require('../models/companyModel'); // Import the Company model

const CompanyPaySlipInfo = sequelize.define(
  'companyPaySlipInfo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: Company, // Reference the Company model
        key: 'id',
      },
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50],
      },
    },
    payday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 31,
      },
    },
  },
  {
    sequelize,
    tableName: 'company_pay_slip_info',
    underscored: true,
  }
);

// Associations
Company.hasOne(CompanyPaySlipInfo); // A Company can have one CompanyPaySlipInfo
CompanyPaySlipInfo.belongsTo(Company); // A CompanyPaySlipInfo belongs to a Company

module.exports = CompanyPaySlipInfo;
