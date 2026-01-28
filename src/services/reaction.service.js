const reactionModels = require("../models/reaction.models");
const throwError = require("../utils/throwError");

class ReactionService {

    like({ post_id, userId, type }) {
        if (!userId) throwError("Cannot find User");
        if (!post_id) throwError("Cannot find Post");
        return reactionModels.create({ post: post_id, user: userId, type: type });
    }
}

module.exports = new ReactionService();
