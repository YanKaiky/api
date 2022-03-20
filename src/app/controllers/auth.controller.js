const createError = require("http-errors");
const AuthService = require("../services/auth.service");

class AuthController {
  static login = async (request, response, next) => {
    try {
      const payload = {
        email: request.body.email,
        password: request.body.password,
      };

      const access = await AuthService.login(payload);

      response.status(200).json({
        status: 200,
        statusText: "OK",
        message: "Account login successful",
        data: access,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = AuthController;
