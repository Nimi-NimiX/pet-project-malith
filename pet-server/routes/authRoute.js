const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
const LoginController = require('../controllers/loginController');

router.post('/register', registrationController.register);
router.post('/login', LoginController.login);

module.exports = router;
