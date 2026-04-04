const express = require('express');
const { getCommentsByPost, createComment, updateComment, deleteComment} = require('../api/comments');
const {validateExists} = require('../middleware/postValidator');
const router = express.Router({mergeParams: true});

router.get('/posts/:postId/comments', validateExists, getCommentsByPost);
router.post('/posts/:postId/comments', validateExists, createComment);
router.put('/comments/:id', updateComment);
router.delete('/comments/:id', deleteComment);

module.exports = router;