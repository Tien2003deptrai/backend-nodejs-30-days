const authService = require("../services/auth.service");

class AuthController {
    async register(req, res) {
        try {
            const userData = req.body;
            const result = await authService.register(userData);
            return res.status(201).json({ message: "Register successfully", data: result });
        } catch (error) {
            return res.status(500).json("Internal server error");
        }
    }
}

module.exports = new AuthController();
