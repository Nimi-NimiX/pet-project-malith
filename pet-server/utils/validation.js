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
