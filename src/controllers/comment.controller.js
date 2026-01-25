const commentService = require("../services/comment.service");

class CommentController {
    async createComment(req, res, next) {
        try {
            const { postId, content } = req.body;
            const { userId } = req.user;

            const result = await commentService.createComment({ userId: userId, postId: postId, content: content });
            return res.status(201).json({ message: "Comment created", data: result });
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new CommentController();
