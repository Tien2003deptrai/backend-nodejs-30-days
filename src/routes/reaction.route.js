const express = require('express');
const reactionController = require('../controllers/reaction.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.post("/like", authMiddleware, reactionController.like)

module.exports = router;
