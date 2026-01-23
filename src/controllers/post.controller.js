const postService = require("../services/post.service");

class PostController {
    async createPost(req, res) {
        try {
            const userId = req.user.userId; // lấy userId từ req.user do authMiddleware gán vào
            const newPost = req.body;

            const result = await postService.createPost(newPost, userId);
            res.status(201).json({ message: "Post created successfully", data: result });
        } catch (error) {
            res.status(500).json("Internal server error");
        }
    }

    async getListPosts(req, res) {
        try {
            const result = await postService.getListPosts();
            res.status(201).json({ message: "Post retrieved successfully", data: result });
        } catch (error) {
            res.status(500).json("Internal server error");
        }
    }

    async getPostById(req, res) {
        try {
            const post_id = req.params.post_id;
            // const { post_id } = req.params;
            const result = await postService.getPostById(post_id);
            res.status(201).json({ message: "Post retrieved successfully", data: result });
        } catch (error) {
            res.status(500).json("Internal server error");
        }
    }

    async deletePostById(req, res) {
        try {
            const post_id = req.params.post_id;
            const result = await postService.deletePostById(post_id);
            res.status(201).json({ message: "Post deleted successfully", data: result });
        } catch (error) {
            res.status(500).json("Internal server error");
        }
    }

    async updatePostById(req, res) {
        try {
            const post_id = req.params.post_id;
            const updateData = req.body;
            const result = await postService.updatePostById(post_id, updateData);
            res.status(201).json({ message: "Post updated successfully", data: result });
        } catch (error) {
            res.status(500).json("Internal server error");
        }
    }

    async getPostsByUserId(req, res, next) {
        try {
            const userId = req.user.userId;
            const posts = await postService.getPostsByUserId(userId);
            res.status(200).json({ message: "Posts retrieved successfully", data: posts });
        } catch (error) {
            next(error);
        }
    }


}

module.exports = new PostController();
