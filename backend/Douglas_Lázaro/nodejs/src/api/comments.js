const {commentsData:{comments}, postsData:{posts}} = require('../data/mockData');

/**
 *  @swagger
 *   tags:
 *   name: Comments
 *   description: API para el manejo de comentarios en el sistema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         postId:
 *           type: integer
 *         userId:
 *           type: integer
 *         text:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
 */


/**
 * @swagger
 * /api/posts/{postId}/comments:
 *   get:
 *     tags:
 *       - Comments
 *     summary: Obtiene comentarios de un post con paginación
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 5
 *     responses:
 *       200:
 *         description: Lista paginada de comentarios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Comment'
 */
const getCommentsByPost = (req,resp) => {
    const {postId} = req.params;
    const postExists = posts.find(p => p.id === parseInt(postId));
    
    if(!postExists){
        return resp.status(404).json({message: "Post not found"});
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit || 5);

    const postComments = comments.filter(c => c.postId === parseInt(postId));

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = postComments.slice(startIndex, endIndex);

    resp.status(200).json({
        total: postComments.length,
        page,
        limit,
        data: results
    });
};

/**
 * @swagger
 * /api/posts/{postId}/comments:
 *   post:
 *     tags:
 *       - Comments
 *     summary: Crea un nuevo comentario para un post
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - text
 *             properties:
 *               userId:
 *                 type: integer
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comentario creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 */
const createComment = (req,resp) => {
    const {postId} = req.params;
    const {userId, text} = req.body;

    const newComment = {
        id: comments.length > 0 ? comments[comments.length -1].id + 1 : 1,
        postId: parseInt(postId),
        userId: parseInt(userId),
        text,
        date: new Date().toISOString()
    };
    comments.push(newComment);
    resp.status(201).json(newComment);
};

/**
 * @swagger
 * /api/comments/{id}:
 *   put:
 *     tags:
 *       - Comments
 *     summary: Actualiza un comentario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comentario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Comment not found
 */
const updateComment = (req,resp) => {
    const {id} = req.params;
    const index = comments.findIndex(c => c.id === parseInt(id));

    if(index === -1){
        comments[index] = {...comments[index], ...req.body};
        resp.status(200).json(comments[index]);
    }else{
        resp.status(404).json({message:"Comment not found"});
    }
};

/**
 * @swagger
 * /api/comments/{id}:
 *   delete:
 *     tags:
 *       - Comments
 *     summary: Elimina un comentario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Eliminado con éxito
 *       404:
 *         description: Comment not found
 */
const deleteComment = (req,resp) => {
    const {id} = req.params;
    const index = comments.findIndex(c => c.id === parseInt(id));

    if(index !== -1){
        comments.splice(index,1);
        resp.status(204).send();
    }else{
        resp.status(404).json({message: "Commen not found"});
    }
};

module.exports = { getCommentsByPost, createComment, updateComment, deleteComment };