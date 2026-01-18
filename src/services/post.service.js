const postModel = require("../models/post.model");
const userModel = require("../models/user.model");

class PostService {
    createPost(newPost) {
        return postModel.create(newPost);
    }

    getListPosts() {
        const posts = postModel.find({}) // lấy danh sách post
            .populate({
                path: 'user',
                select: 'name email'
            })

        return posts;
    }

    getPostById(post_id) {
        return postModel.findById(post_id)
            .populate({
                path: 'user',
                select: 'name email'
            })
    }

    deletePostById(post_id) {
        return postModel.findByIdAndDelete(post_id)
    }

    updatePostById(post_id, updateData) {
        return postModel.findByIdAndUpdate(post_id, updateData, {
            new: true,
            runValidators: true
        })
    }
}

module.exports = new PostService();
