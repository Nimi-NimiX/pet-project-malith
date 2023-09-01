const bcrypt = require('bcrypt');
const userRepository = require('../repository/usersRepository');
const companyRepository = require('../repository/companyRepository');
const companyPaySlipInfoRepository = require('../repository/companyPaySlipInfoRepository');
const {
  validateUserData,
  validateCompanyData,
  validatePaySlipData,
  validateAndThrow,
} = require('../utils/validation');

const registerUserAndCompany = async (userData, companyData, paySlipData) => {
  try {
    // Validate user data
    validateAndThrow(userData, validateUserData);

    // Validate company data
    validateAndThrow(companyData, validateCompanyData);

    // Validate pay slip data
    validateAndThrow(paySlipData, validatePaySlipData);

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    // Register user
    const user = await userRepository.createUser(userData);

    // Register company
    companyData.userId = user.id; // Attach the user ID to the companyData
    const company = await companyRepository.createCompany(companyData);

    // Register companyPaySlipInfo
    paySlipData.companyId = company.id; // Attach the company ID to the paySlipData
    const paySlipInfo =
      await companyPaySlipInfoRepository.createCompanyPaySlipInfo(paySlipData);

    const successMessage = 'Registration successful!';
    console.log(successMessage);

    return {
      success: true,
      message: successMessage,
      userData: user,
      companyData: company,
      companyPaySlipInfo: paySlipInfo,
    };
  } catch (error) {
    throw new Error('Registration process failed.');
  }
};

module.exports = {
  registerUserAndCompany,
};
