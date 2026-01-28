const express = require('express');
const commentController = require('../controllers/comment.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const commentValidator = require('../validations/comment.validator');
const validate = require('../middlewares/validate.middleware');
const router = express.Router();

router.post(
    '/create',
    authMiddleware,
    commentValidator.createCommentValidator,
    validate,
    commentController.createComment
);

// nhiều thằng con endpoint
module.exports = router;
