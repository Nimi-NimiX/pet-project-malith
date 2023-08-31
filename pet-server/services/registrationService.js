const bcrypt = require('bcrypt');
const userRepository = require('../repository/usersRepository');
const companyRepository = require('../repository/companyRepository');
const companyPaySlipInfoRepository = require('../repository/companyPaySlipInfoRepository');

const registerUserAndCompany = async (userData, companyData, paySlipData) => {
  try {
    // Validate forme data
    if (
      !userData.username ||
      !userData.email ||
      !userData.mobileNumber ||
      !userData.password
    ) {
      throw new Error('Incomplete user data.');
    }

    if (
      !companyData.companyName ||
      !companyData.companyEmail ||
      !companyData.contactNumber ||
      !companyData.field ||
      !companyData.addressLine1 ||
      !companyData.addressLine2 ||
      !companyData.city ||
      !companyData.country
    ) {
      throw new Error('Incomplete company data.');
    }

    if (!paySlipData.currency || !paySlipData.payday) {
      throw new Error('Incomplete pay slip data.');
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

    return {
      success: true,
      message: 'Registration successful!',
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
