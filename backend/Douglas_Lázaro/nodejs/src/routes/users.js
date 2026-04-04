const express = require('express');
const {getAllUsers, getUserById, createUser, updateUser, deleteUser, followUser, getFollowers, getFollowing, unfollowUser} = require('../api/users');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id',getUserById);
router.post('/',createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
router.post('/:id/follow', followUser);
router.get('/:id/followers', getFollowers);
router.get('/:id/following', getFollowing);
router.delete('/:id/unfollow', unfollowUser);

module.exports = router;

