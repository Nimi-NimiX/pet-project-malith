const Joi = require('joi');

//check password complexity requirements
const passwordComplexity = (password) => {
  // At least 8 characters, with at least 3 of the following: lowercase, uppercase, numbers, special characters
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#\$%\^&\*]/.test(password);

  const meetsCriteriaCount = [
    hasLowercase,
    hasUppercase,
    hasDigit,
    hasSpecialChar,
  ].filter(Boolean).length;

  return password.length >= 8 && meetsCriteriaCount >= 3;
};

//validate the  user data
const validateUserData = (userData) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    mobileNumber: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required(),
    password: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (!passwordComplexity(value)) {
          return helpers.error('password.complexity');
        }
        return value;
      })
      .messages({
        'password.complexity':
          'Password must contain at least 8 characters and meet the complexity requirements.',
      }),
  });

  return schema.validate(userData);
};

//validate the company data
const validateCompanyData = (companyData) => {
  const schema = Joi.object({
    companyName: Joi.string().min(3).max(100).required(),
    companyEmail: Joi.string().email().required(),
    contactNumber: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required(),
    field: Joi.string().min(3).max(50).required(),
    addressLine1: Joi.string().min(5).max(100).required(),
    addressLine2: Joi.string().max(100),
    city: Joi.string().min(2).max(50),
    country: Joi.string().min(2).max(50),
  });

  return schema.validate(companyData);
};

const validatePaySlipData = (paySlipData) => {
  const schema = Joi.object({
    currency: Joi.string().min(2).max(50).required(),
    payday: Joi.number().integer().min(1).max(31).required(),
  });

  return schema.validate(paySlipData);
};

const validateLoginData = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (!passwordComplexity(value)) {
          return helpers.error('password.complexity');
        }
        return value;
      })
      .messages({
        'password.complexity':
          'Password must contain at least 8 characters and meet the complexity requirements.',
      }),
  });
  return schema.validate(data);
};
const Validation = {
  passwordComplexity,
  validateUserData,
  validateCompanyData,
  validatePaySlipData,
  validateLoginData,
};
module.exports = Validation;
