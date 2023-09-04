const usersRepository = require('../repository/usersRepository');
const { validateUserProfileUpdate } = require('../utils/validation');

const getUserProfile = async (userId) => {
  try {
    const user = await usersRepository.getUserById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    throw new Error(`Failed to fetch user profile: ${error.message}`);
  }
};

const updateUserProfile = async (userId, updatedProfile) => {
  try {
    // Validate and sanitize input data
    const { error } = validateUserProfileUpdate(updatedProfile);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const user = await usersRepository.getUserById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Update user profile
    const result = await usersRepository.updateUser(user, updatedProfile);

    return result;
  } catch (error) {
    throw new Error(`Profile update failed: ${error.message}`);
  }
};

module.exports = { getUserProfile, updateUserProfile };
