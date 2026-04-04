const {postsData:{posts}} = require('../data/mockData');

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: API para la gestión de publicaciones y posts
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del post
 *         title:
 *           type: string
 *           description: El título del post
 *         content:
 *           type: string
 *           description: El contenido o cuerpo del post
 *         likes:
 *           type: integer
 *           description: Cantidad de me gusta
 *         createdAt:
 *           type: string
 *           format: date
 *           description: Fecha de creación
 *       example:
 *         id: 1
 *         title: "Idea de Coworking"
 *         content: "Busco socios para un proyecto de Node.js"
 *         likes: 0
 *         createdAt: "Dom 22 Mar 2026"
 */


/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Retrieve all posts
 *     description: Gets a complete list of all ideas/posts stored in the system.
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: A successful response with the list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       500:
 *         description: Internal server error.
 */
const getAllPost = (req,resp) => resp.status(200).json(posts);


/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post found
 *       404:
 *         description: Post not found
 *   put:
 *     summary: Update a post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post updated
 *   delete:
 *     summary: Remove a post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Post deleted
 */
const getPostById = (req,resp) => {
    const {id} = req.param;
    const post = posts.find(post => post.id === parseInt(id));

    if(post){
        resp.status(200).json(post);
    }
    else{
        resp.status(404).json({message:'Post not found'})
    }
}

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     description: Adds a new post to the collection and returns the created object including the ID and date.
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the post
 *                 example: "New Project Idea"
 *               content:
 *                 type: string
 *                 description: The detailed description
 *                 example: "A collaborative platform for developers."
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: Bad request - Missing required fields
 */
const createPost = (req,resp) => {
    const newPost ={id:posts.length + 1, ...req.body,createdAt:new Date().toDateString()};
    posts.push(newPost);
    resp.status(201).json(newPost);
}

/**
 * @swagger
 * /api/posts/{id}/like:
 *   patch:
 *     summary: Incrementa los likes de un post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID del post al que se le sumará un like
 *     responses:
 *       200:
 *         description: Like añadido con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Me gusta añadido"
 *                 likes:
 *                   type: integer
 *                   example: 11
 *                 id:
 *                   type: integer
 *                   example: 1
 *       404:
 *         description: No se encontró el post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "post not found"
 */
const incrementPostLikes = (req, resp) => {
    const {id} = req.params;
    const postIndex = posts.find(post => post.id === parseInt(id));

    if(postIndex !== -1){
        postIndex.likes += 1;
        resp.status(200).json({
            message:"Me gusta añadido",
            likes:postIndex.likes,
            id:post.id
        });
    }
    else{
        resp.status(404).json({message: 'post not found'});
    }
}

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update an existing post
 *     description: Updates the fields of a post by its ID. It merges existing data with the new data provided in the body.
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the post to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "post not found"
 */
const updatePost = (req,resp) => {
    const {id} = req.params;
    const postIndex = posts.findIndex(post => post.id === parseInt(id));

    if(postIndex !== -1){
        posts[postIndex] = {...posts[postsIndex], ...req.body};
        resp.status(200).json(posts[postIndex]);
    }
    else{
        resp.status(404).json({message: 'post not found'});
    }
}

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Remove a post by ID
 *     description: Deletes a specific post from the collection using its unique ID.
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the post to delete.
 *     responses:
 *       204:
 *         description: Post deleted successfully (No content returned).
 *       404:
 *         description: Post not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "post not found"
 */
const deletePost = (req,resp) => {
    const {id} = req.params;
    const postIndex = posts.findIndex(post => post.id === parseInt(id));

    if(postIndex !== -1){
        posts.splice(postIndex,1);
        return resp.status(204).send();
    }
    else{
        resp.status(404).json({message: 'post not found'});
    }
}

module.exports={getAllPost,getPostById,createPost,incrementPostLikes,updatePost,deletePost};