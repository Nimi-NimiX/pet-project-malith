const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
const loginController = require('../controllers/loginController');

router.post('/register', registrationController.register);
router.post('/login', loginController.login);

module.exports = router;
