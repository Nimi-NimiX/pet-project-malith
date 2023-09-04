const registrationService = require('../services/registrationService');

const register = async (req, res) => {
  try {
    const {
      username,
      email,
      mobileNumber,
      password,
      companyName,
      companyEmail,
      contactNumber,
      field,
      addressLine1,
      addressLine2,
      city,
      country,
      currency,
      payday,
    } = req.body;

    // Create user data object
    const userData = { username, email, mobileNumber, password };

    // Create company data object
    const companyData = {
      companyName,
      companyEmail,
      contactNumber,
      field,
      addressLine1,
      addressLine2,
      city,
      country,
    };

    // Create pay slip data object
    const paySlipData = { currency, payday };

    // Register user, company, and company pay slip info
    const {
      success,
      message,
      userData: user,
      companyData: company,
      companyPaySlipInfo: paySlipInfo,
    } = await registrationService.registerUserAndCompany(
      userData,
      companyData,
      paySlipData
    );

    // Prepare the response data
    const responseData = {
      success,
      message,
      user,
      company,
      paySlipInfo,
    };

    // Send the response
    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);

    // Prepare the error response
    const errorResponse = {
      success: false,
      error: error.message,
    };

    // Send the error response
    res.status(400).json(errorResponse);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { register };
