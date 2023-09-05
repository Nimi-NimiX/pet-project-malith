const LoginService = require('../services/loginService');

const LoginController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await LoginService.loginUser(email, password);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = LoginController;
