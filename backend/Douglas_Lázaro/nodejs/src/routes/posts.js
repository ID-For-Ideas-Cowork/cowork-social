const express = require('express');
const {getAllPost, getPostById, createPost, incrementPostLikes, updatePost, deletePost} = require('../api/posts');

const router = express.Router();

router.get('/', getAllPost);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.patch('/:id/like', incrementPostLikes);
router.delete('/:id', deletePost);

module.exports = router;