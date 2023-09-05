const ProfileService = require('../services/profileService');

const ProfileController = {
  getUserProfile: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const user = await ProfileService.getUserProfile(userId);

      res.json(user);
    } catch (error) {
      next(error);
    }
  },
  updateUserProfile: async (req, res, next) => {
    try {
      const userId = req.user.id;
      const updatedProfile = req.body;

      const result = await ProfileService.updateUserProfile(
        userId,
        updatedProfile
      );

      res.status(200).json(result);
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
      const companyId = req.company.id; // Get the company ID from the request parameters
      const company = await CompanyService.getCompanyProfile(companyId);
      res.json(company);
    } catch (error) {
      next(error);
    }
  },

  updateCompanyProfile: async (req, res, next) => {
    try {
      const companyId = req.company.id; // Get the company ID from the request parameters
      const updatedProfile = req.body;

      const result = await CompanyService.updateCompanyProfile(
        companyId,
        updatedProfile
      );
      res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = ProfileController;
