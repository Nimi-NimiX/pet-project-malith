const bcrypt = require('bcrypt');
const userRepository = require('../repository/usersRepository');
const companyRepository = require('../repository/companyRepository');
const companyPaySlipInfoRepository = require('../repository/companyPaySlipInfoRepository');

const registerUserAndCompany = async (userData, companyData, paySlipData) => {
  try {
    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
  } catch (error) {
    throw new Error('Registration process failed.');
  }
};

module.exports = {
  registerUserAndCompany,
};
