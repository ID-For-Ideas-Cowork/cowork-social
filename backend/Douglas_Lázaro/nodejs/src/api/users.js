//import {users} from '../data/mockData.js';
const {usersData:{users},followsData:{follows} }= require('../data/mockData');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestión de usuarios del sistema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del usuario
 *         name:
 *           type: string
 *           description: Nombre completo
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico
 *       example:
 *         id: 1
 *         name: "Bob Pérez"
 *         email: "bob@example.com"
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
const getAllUsers = (req,resp) => resp.status(200).json(users);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieves a single user object based on their unique numeric ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique numeric ID of the user.
 *     responses:
 *       200:
 *         description: User found successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User not found"
 */
const getUserById = (req,resp) => {
    const {id} = req.params;
    const user = users.find(user => user.id === parseInt(id));

    if(user){
        resp.status(200).json(user);
    }
    else{
        resp.status(404).json({message:'User not found'});
    }
};

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Registra un nuevo usuario en el sistema. El ID se genera automáticamente.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre completo del usuario
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico único
 *             example:
 *               name: "María García"
 *               email: "maria@example.com"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error en los datos enviados
 */
const createUser = (req,resp) => {
    const newUser = {id:users.length + 1, ...req.body};
    users.push(newUser);
    resp.status(201).json(newUser);
};

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update an existing user
 *     description: Updates a user's details by merging existing data with new data from the request body.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the user to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User not found"
 */
const updateUser = (req,resp) =>{
    const {id} = req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if(userIndex != -1){
        users[userIndex] = {...users[usersIndex], ...req.body};
        resp.status(200).json(users[userIndex]);
    }
    else{
        resp.status(404).json({message: 'User not found'});
    }
};

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     description: Elimina permanentemente un usuario de la lista utilizando su identificador único.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID del usuario que se desea eliminar.
 *     responses:
 *       204:
 *         description: Usuario eliminado exitosamente (Sin contenido).
 *       404:
 *         description: Usuario no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User not found"
 */
const deleteUser = (req, resp) => {
    const {id} = req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if(userIndex !== -1){
        users.splice(userIndex,1);
        return resp.status(204).send();
    }
    else{
        resp.status(404).json({message: 'User not found'});
    }
};

/**
 * @swagger
 * /api/users/{id}/follow:
 *   post:
 *     tags:
 *       - Users
 *     summary: Seguir a un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario al que se desea seguir
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               followerId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Usuario seguido con éxito
 *       400:
 *         description: Error en la validación (auto-seguimiento o ya seguido)
 */
const followUser = (req, resp) => {
    const followingId = parseInt(req.params.id);
    const {followerId} = req.body;

    if(followerId === followingId){
        return resp.status(400).json({message: "No puedes seguirte a ti mismo"});
    }

    const alreadyFollows = follows.find(f => f.followerId === followerId && f.followingId === followingId);

    if(alreadyFollows){
        return resp.status(400).json({message: "Ya sigues a este usuario"});
    }

    follows.push({followerId, followingId});
    resp.status(201).json({message: "Ahora sigues a este usuario"});
};

/**
 * @swagger
 * /api/users/{id}/followers:
 *   get:
 *     tags:
 *       - Users
 *     summary: Listado de seguidores (quiénes siguen al usuario)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserStats'
 */
const getFollowers = (req, resp) => {
    const userId = parseInt(req.params.id);
    const userFollowers = follows.filter(f => f.followingId === userId).map(f => f.followerId);

    if(!userFollowers){
        return resp.status(404).json({message: "Usuario no encontrado"});
    }

    resp.status(200).json({
        userId,
        count: userFollowers.length,
        data: userFollowers
    });
};

/**
 * @swagger
 * /api/users/{id}/following:
 *   get:
 *     tags:
 *       - Users
 *     summary: Listado de seguidos (a quiénes sigue el usuario)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserStats'
 */
const getFollowing = (req, resp) => {
    const userId = parseInt(req.params.id);
    const userFollowing = follows.filter(f => f.followerId === userId).map(f => f.followingId);

    if(!userFollowing){
        return resp.status(404).json({message: "Usuario no encontrado"});
    }
    resp.status(200).json({
        userId,
        count: userFollowing.length,
        data: userFollowing
    });
};

/**
 * @swagger
 * /api/users/{id}/unfollow:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Dejar de seguir a un usuario
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
 *               followerId:
 *                 type: integer
 *     responses:
 *       204:
 *         description: Dejado de seguir con éxito
 *       404:
 *         description: No se encontró la relación de seguimiento
 */
const unfollowUser = (req, resp) => {
    const followingId = parseInt(req.params.id);
    const {followerId} = req.body;

    const index = follows.findIndex(f => f.followerId === followerId && f.followingId === followingId);
    
    if(index !== -1 ){
        follows.splice(index, 1);
        resp.status(204).send();
    }else{
        resp.status(404).json({message: "No sigues a este usuario"});
    }
};

module.exports = {getAllUsers,getUserById,createUser,updateUser,deleteUser,followUser,getFollowers,getFollowing,unfollowUser};