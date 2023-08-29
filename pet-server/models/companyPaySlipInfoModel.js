const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/databaseConnection");
const Company = require("../models/companyModel"); // Import the Company model

const CompanyPaySlipInfo = sequelize.define(
  "companyPaySlipInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Company, // Reference the Company model
        key: "id",
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
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "companyPaySlipInfo",
  }
);

module.exports = CompanyPaySlipInfo;
