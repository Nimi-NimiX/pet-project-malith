const User = require('../models/usersModel');

const UserRrepository = {
  createUser: async (userData) => {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  },

  getUserByEmail: async (email) => {
    try {
      const user = await User.findOne({
        where: { email },
      });

      return user;
    } catch (error) {
      throw new Error(`Error fetching user by email: ${error.message} `);
    }
  },
  findById: async (id) => {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw error;
    }
  },
  updateUserProfile: async (userId, updatedUserProfile) => {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Update only user-specific fields
    if (updatedUserProfile.username)
      user.username = updatedUserProfile.username;
    if (updatedUserProfile.email) user.email = updatedUserProfile.email;
    if (updatedUserProfile.mobileNumber)
      user.mobileNumber = updatedUserProfile.mobileNumber;

    // Save the updated user data
    await user.save();

    return user;
  },
};

module.exports = UserRrepository;
