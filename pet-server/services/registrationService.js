const bcrypt = require('bcrypt');
const userRepository = require('../repository/usersRepository');
const companyRepository = require('../repository/companyRepository');
const companyPaySlipInfoRepository = require('../repository/companyPaySlipInfoRepository');
const {
  validateUserData,
  validateCompanyData,
  validatePaySlipData,
} = require('../utils/validation');

const registerUserAndCompany = async (userData, companyData, paySlipData) => {
  try {
    // Validate user data
    const { error: userError } = validateUserData(userData);
    if (userError) {
      console.log('user detaild not valid', userError);
    }

    // Validate company data
    const { error: companyError } = validateCompanyData(companyData);
    if (companyError) {
      console.log('company  detaild not valid', companyError);
    }

    // Validate pay slip data
    const { error: paySlipError } = validatePaySlipData(paySlipData);
    if (paySlipError) {
      console.log('company pay slip  detaild not valid', paySlipError);
    }
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
