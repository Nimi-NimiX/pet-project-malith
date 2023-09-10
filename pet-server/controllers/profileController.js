const ProfileService = require('../services/profileService');

const ProfileController = {
  getUserProfile: async (req, res, next) => {
    try {
      console.log('controller');
      console.log(`req : ${req.user.userId}`);
      const id = req.user.userId;

      const user = await ProfileService.getUserProfile(id);
      const userProfile = {
        username: user.username,
        email: user.email,
        mobileNumber: user.mobileNumber,
      };

      res.json(userProfile);
    } catch (error) {
      next(error);
    }
  },
  updateUserProfile: async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const updatedProfile = req.body;
      console.log(`update profile :${updatedProfile}`);

      const result = await ProfileService.updateUserProfile(
        userId,
        updatedProfile
      );
      const updatedUserProfile = {
        username: result.username,
        email: result.email,
        mobileNumber: result.mobileNumber,
      };

      res.status(200).json(updatedUserProfile);
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
  },

  getCompanyProfile: async (req, res, next) => {
    try {
      const userId = req.user.userId;

      const company = await ProfileService.getCompanyProfile(userId);
      console.log(`company id:${company.id}`);
      const payslip = await ProfileService.getPaySlipProfile(company.id);
      console.log(`company id:${company.id}`);
      console.log(`pay slip :${payslip.payday}`);

      const companyProfile = {
        companyName: company.companyName,
        companyEmail: company.companyEmail,
        contactNumber: company.contactNumber,
        field: company.field,
        addressLine1: company.addressLine1,
        addressLine2: company.addressLine2,
        city: company.city,
        country: company.country,
        currency: payslip.currency,
        payday: payslip.payday,
      };
      res.json(companyProfile);
    } catch (error) {
      next(error);
    }
  },

  updateCompanyProfile: async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const updatedProfile = req.body;

      const result = await ProfileService.updateCompanyProfile(
        userId,
        updatedProfile
      );
      const updatedCompanyProfile = {
        ompanyName: result.company.companyName,
        companyEmail: result.company.companyEmail,
        contactNumber: result.company.contactNumber,
        addressLine1: result.company.addressLine1,
        addressLine2: result.company.addressLine2,
        mobileNumber: result.company.mobileNumber,
        city: result.company.city,
        country: result.company.country,
        currency: result.paySlip.currency,
        payday: result.paySlip.payday,
      };
      console.log(
        `updated profile :${updatedCompanyProfile}  pay day :${updatedCompanyProfile.payday} city:${updatedCompanyProfile.city}`
      );

      res.status(200).json(updatedCompanyProfile);
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
  },
};

module.exports = ProfileController;
