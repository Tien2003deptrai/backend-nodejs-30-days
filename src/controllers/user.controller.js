const userService = require("../services/user.service");

// let const var - 1 biến (function, cục bộ, toàn cục)
// event loop

class UserController {
    // ngầm hiểu createUser là function
    async createUser(req, res) {
        try {
            const newUser = req.body;
            const result = await userService.createUser(newUser); // đợi lấy dữ liệu <Success> trả về thì mới chạy tiếp
            res.status(201).json({ message: "User created successfully", data: result });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json({ message: "Users retrieved successfully", data: users });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }

    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            res.status(200).json({ message: "Users retrieved successfully", data: user });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }

    async deleteUserById(req, res) {
        try {
            const user = await userService.deleteUserById(req.params.id);
            res.status(200).json({ message: "User deleted successfully", data: user });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }

    async updateUserById(req, res) {
        try {
            const id = req.params.id;
            const updateUser = req.body;
            const user = await userService.updateById(id, updateUser);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ message: "User updated successfully", data: user });
        } catch (err) {
            res.status(400).json("Internal Server Error");
        }
    }

}

module.exports = new UserController();
