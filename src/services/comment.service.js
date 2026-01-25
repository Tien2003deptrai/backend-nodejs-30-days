const commentModels = require("../models/comment.models");

class CommentService {
    createComment({ userId, postId, content }) {
        return commentModels.create({ content, user: userId, post: postId });

    }
}


module.exports = new CommentService();
