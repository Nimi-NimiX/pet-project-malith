const bcrypt = require('bcrypt');
const userRepository = require('../repository/usersRepository');
const companyRepository = require('../repository/companyRepository');
const companyPaySlipInfoRepository = require('../repository/companyPaySlipInfoRepository');
const {
  validateUserData,
  validateCompanyData,
  validatePaySlipData,
  validateLoginData,
} = require('../utils/validation');

const secretKey = process.env.JWT_SECRET_KEY;

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

const loginUser = async (email, password) => {
  try {
    // Validate user input
    const { error } = validateLoginData({ email, password });
    if (error) {
      throw new Error(error.details[0].message);
    }

    // Retrieve the user from the database based on the provided email
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error(`User dosen't exsists`);
    }

    // Compare the provided password with the hashed password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
    });
    return { success: true, message: 'Login successful', token };
  } catch (error) {
    throw new Error(`Login failed: ${error.message}`);
  }
};

module.exports = {
  registerUserAndCompany,
  loginUser,
};
