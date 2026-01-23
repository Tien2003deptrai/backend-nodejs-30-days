const postModel = require("../models/post.model");

class PostService {
    createPost(newPost, userId) {
        return postModel.create({ ...newPost, user: userId });
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

    // lấy danh sách bài viết của một user
    getPostsByUserId(userId) {
        return postModel.find({ user: userId })
    }
}

module.exports = new PostService();
