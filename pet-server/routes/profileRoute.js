const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profileController');
const Authentication = require('../middleware/authenticateUser');

// Routes
router.get(
  '/profile',
  Authentication.authenticateUser,
  ProfileController.getUserProfile
);
router.put(
  '/profile',
  Authentication.authenticateUser,
  ProfileController.updateUserProfile
);
router.get(
  '/comprofile',
  Authentication.authenticateUser,
  ProfileController.getCompanyProfile
);
router.put(
  '/comprofile',
  Authentication.authenticateUser,
  ProfileController.updateCompanyProfile
);
module.exports = router;
