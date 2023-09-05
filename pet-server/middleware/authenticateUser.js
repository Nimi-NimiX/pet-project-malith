const passport = require('passport');

const Authentication = {
  // This middleware verifies the JWT token and attaches the user information to req.user
  authenticateUser: (req, res, next) => {
    // Get the token from the request headers
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Verify the token using secret key
    const secretKey = process.env.JWT_SECRET_KEY;

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Attach the user object to the request
      req.user = user;

      next();
    });
  },
};

module.exports = Authentication;
