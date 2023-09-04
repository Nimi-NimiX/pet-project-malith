const User = require('../models/usersModel');

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw error;
  }
};
const getUserById = async (userId) => {
  try {
    return await User.findByPk(userId);
  } catch (error) {
    throw new Error(`Failed to fetch user by ID: ${error.message}`);
  }
};

// Update user data in the database
const updateUser = async (user, updateData) => {
  try {
    // Update user-specific fields
    if (user.username) user.username = user.username;
    if (user.email) user.email = user.email;
    if (user.mobileNumber) user.mobileNumber = user.mobileNumber;

    await user.save();

    return { success: true, message: 'User updated successfully' };
  } catch (error) {
    throw new Error(`User update failed: ${error.message}`);
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
};
