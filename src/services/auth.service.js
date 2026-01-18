const userModel = require("../models/user.model");

class AuthService {
    async register(userData) {
        const userExists = await userModel.findOne({ email: userData.email });
        if (userExists) { throw new Error("User already exists"); } // lỗi ngoại lệ
        return await userModel.create(userData);
    }
}

module.exports = new AuthService();
