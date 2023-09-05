const ProfileService = require('../services/profileService');

const ProfileController = {
  getUserProfile: async (req, res, next) => {
    try {
      const userId = req.user.id; // Assuming you have authentication middleware that sets req.user
      const user = await ProfileService.getUserProfile(userId);

      res.json(user);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = ProfileController;
