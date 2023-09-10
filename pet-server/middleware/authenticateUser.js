const passport = require('passport');
const jwt = require('jsonwebtoken');

const Authentication = {
  // This middleware verifies the JWT token and attaches the user information to req.user
  authenticateUser: (req, res, next) => {
    // Get the token from the request headers
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ error: 'cant get token' });
    }

    // Verify the token using secret key
    const secretKey = process.env.JWT_SECRET_KEY;
    const tokenWithoutBearer = token.startsWith('Bearer ')
      ? token.slice(7) // Remove 'Bearer ' prefix
      : token;

    jwt.verify(tokenWithoutBearer, secretKey, (err, user) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized token' });
      }

      // Attach the user object to the request
      req.user = user;

      next();
    });
  },
};

module.exports = Authentication;
