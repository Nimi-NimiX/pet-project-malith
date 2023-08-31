const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/databaseConnection');
const User = require('./usersModel'); // Import the User model

const Company = sequelize.define(
  'company',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, // Reference the User model
        key: 'id',
      },
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100],
      },
    },
    company_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    contact_number: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 15],
      },
    },
    field: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50],
      },
    },
    address_line1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 100],
      },
    },
    address_line2: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 50],
      },
    },
    country: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 50],
      },
    },
  },
  {
    sequelize,
    tableName: 'company',
    underscored: true,
  }
);

module.exports = Company;
