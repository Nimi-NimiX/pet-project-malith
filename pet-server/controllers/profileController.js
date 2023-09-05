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
};

module.exports = ProfileController;
