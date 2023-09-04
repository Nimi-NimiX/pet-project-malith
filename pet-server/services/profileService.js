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
