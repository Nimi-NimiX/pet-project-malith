const express = require('express');
const router = express.Router();
const RegistrationController = require('../controllers/registrationController');
const LoginController = require('../controllers/loginController');

router.post('/register', RegistrationController.register);
router.post('/login', LoginController.login);

module.exports = router;
