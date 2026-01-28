const reactionService = require("../services/reaction.service");

class ReactionController {

    async like(req, res, next) {
        try {
            const { post_id, type } = req.body;
            const { userId } = req.user;
            const result = await reactionService.like({ post_id, userId, type })
            res.status(200).json({ message: "Reaction processed successfully", data: result });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ReactionController();
