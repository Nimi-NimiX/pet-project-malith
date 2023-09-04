const bcrypt = require('bcrypt');
const userRepository = require('../repository/usersRepository');
const { validateLoginData } = require('../utils/validation');
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET_KEY;

const loginUser = async (email, password) => {
  try {
    // Validate user input
    const { error } = validateLoginData({ email, password });
    if (error) {
      throw new Error(error.details[0].message);
    }

    // Retrieve the user from the database based on the provided email
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error(`User dosen't exsists`);
    }

    // Compare the provided password with the hashed password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
    });
    return { success: true, message: 'Login successful', token };
  } catch (error) {
    throw new Error(`Login failed: ${error.message}`);
  }
};

module.exports = {
  loginUser,
};
