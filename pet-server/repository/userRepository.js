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
};

module.exports = UserRrepository;
