const bcrypt = require('bcrypt');
const UserRepository = require('../repository/userRepository');
const CompanyRepository = require('../repository/companyRepository');
const CompanyPaySlipRepository = require('../repository/companyPaySlipInfoRepository');
const Validation = require('../utils/validation');

const registerUserAndCompany = async (userData, companyData, paySlipData) => {
  try {
    // Validate user data
    const { error: userError } = Validation.validateUserData(userData);
    if (userError) {
      console.log('user detaild not valid', userError);
    }

    // Validate company data
    const { error: companyError } = Validation.validateCompanyData(companyData);
    if (companyError) {
      console.log('company  detaild not valid', companyError);
    }

    // Validate pay slip data
    const { error: paySlipError } = Validation.validatePaySlipData(paySlipData);
    if (paySlipError) {
      console.log('company pay slip  detaild not valid', paySlipError);
    }
    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    // Register user
    const user = await UserRepository.createUser(userData);

    // Register company
    companyData.userId = user.id; // Attach the user ID to the companyData
    const company = await CompanyRepository.createCompany(companyData);

    // Register companyPaySlipInfo
    paySlipData.companyId = company.id; // Attach the company ID to the paySlipData
    const paySlipInfo = await CompanyPaySlipRepository.createCompanyPaySlipInfo(
      paySlipData
    );

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

const RegistrationService = { registerUserAndCompany };
module.exports = RegistrationService;
