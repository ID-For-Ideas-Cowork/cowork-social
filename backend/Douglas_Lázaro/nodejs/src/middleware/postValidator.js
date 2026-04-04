const {postsData: {posts}} = require('../data/mockData');

const validateExists = (req,resp,next) => {
    const {postId} = req.params;
    const post = posts.find(p => p.id === parseInt(postId));

    if(!post){
        return resp.status(404).json({
            status: "error",
            message: `Post ${postId} not found`
        });
    }
    next();
};

module.exports = {validateExists};