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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: User, // Reference the User model
        key: 'id',
      },
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100],
      },
    },
    companyEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    contactNumber: {
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
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 100],
      },
    },
    addressLine2: {
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

// Associations
User.hasOne(Company); // A User can have one Company
Company.belongsTo(User); // A Company belongs to a User

module.exports = Company;
