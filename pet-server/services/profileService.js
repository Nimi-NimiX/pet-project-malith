const UserRrepository = require('../repository/userRepository');
const Validation = require('../utils/validation');

const ProfileService = {
  getUserProfile: async (userId) => {
    try {
      const user = await UserRrepository.findById(userId);

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw new Error(`Failed to fetch user profile: ${error.message}`);
    }
  },

  updateUserProfile: async (userId, updatedProfile) => {
    try {
      // Validate and sanitize input data
      const { error } = Validation.validateUserProfileUpdate(updatedProfile);
      if (error) {
        throw new Error(error.details[0].message);
      }

      const user = await UserRrepository.findById(userId);

      if (!user) {
        throw new Error('User not found');
      }

      // Update user profile
      const result = await UserRrepository.updateUserProfile(
        userId,
        updatedProfile
      );

      return result;
    } catch (error) {
      throw new Error(`Profile update failed: ${error.message}`);
    }
  },
};

module.exports = ProfileService;
