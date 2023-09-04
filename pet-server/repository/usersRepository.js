const User = require('../models/usersModel');

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({
      where: { email },
    });

    return user;
  } catch (error) {
    throw new Error(`Error fetching user by email: ${error.message} `);
  }
};

module.exports = {
  createUser,
  getUserByEmail,
};
