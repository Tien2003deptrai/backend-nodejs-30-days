const mongoose = require("mongoose");

// index - // Tạo chỉ mục cho trường post để tối ưu hóa truy vấn - cho phép tìm kiếm nhanh hơn

const commentSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post", required: true,
            index: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, ref: "User",
            required: true,
            index: true
        },
        content: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 2000
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
