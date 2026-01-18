const userModel = require("../models/user.model");

class UserService {
    // tạo người dùng mới
    createUser(newUser) {
        return userModel.create(newUser);
    }

    // trả về tất cả người dùng
    getAllUsers() {
        return userModel.find({});
    }

    // Lấy một người dùng
    getUserById(id) {
        return userModel.findById(id);
    }

    // Xoá một người dùng
    deleteUserById(id) {
        return userModel.findByIdAndDelete(id);
    }

    // cập nhật người dùng theo Id (có id và dữ liệu mới) - id dùng params, dữ liệu mới dùng body
    async updateById(id, updateData) {
        return userModel.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
    }
}

module.exports = new UserService();
