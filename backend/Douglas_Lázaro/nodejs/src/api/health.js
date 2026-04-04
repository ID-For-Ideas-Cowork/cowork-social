const {healthData: {health}} = require('../data/mockData')

/**
 *  @swagger
 *   tags:
 *   name: Health
 *   description: API para el monitoreo y estado del sistema
 */

/**
 *  @swagger
 *  components:
 *   schemas:
 *     Health:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         status:
 *           type: string
 *         timestamp:
 *           type: string
 *           format: date-time
 *         uptime:
 *           type: number
 *         service:
 *           type: string
 *         version:
 *           type: string
 *       example:
 *         id: 1
 *         status: "healthy"
 *         service: "backend-nodejs"
 *         version: "1.0.0"
 */

/**
 *  @swagger
 *  /api/health:
 *   get:
 *     summary: Obtiene todos los registros de salud
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Lista de estados de salud
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Health'
 */
const getAllHealth = (req,resp) => {
    resp.status(200).json(health);
};

/**
 *  @swagger
 *  /api/health/{id}:
 *   get:
 *     summary: Obtiene salud por ID
 *     tags: [Health]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro encontrado
 *       404:
 *         description: No encontrado
 */
    const getHealthById = (req,resp) => {
    const {id} = req.params;
    const healthIndex = health.find(h => h.id === parseInt(id));
    if(healthIndex){
        resp.status(200).json(healthIndex);
    } else {
        resp.status(404).json({message: 'health not found'});
    }
};

/**
 *  @swagger
 *  /api/health:
 *   post:
 *     summary: Crea un nuevo registro
 *     tags: [Health]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Health'
 *     responses:
 *       201:
 *         description: Creado
 */
const createHealth = (req,resp) => {
    const {status, timestamp, uptime, service} = req.body;
    const newHealth = {
        id: health.length > 0 ? health[health.length - 1].id + 1 : 1,
        status: status || "healthy",
        timestamp: timestamp || new Date().toISOString(),
        uptime: uptime || process.uptime(),
        service: service || "backend-nodejs"
    }
    health.push(newHealth);
    resp.status(201).json(newHealth);
};

/**
 *  @swagger
 *  /api/health/{id}:
 *   put:
 *     summary: Actualiza registro completo
 *     tags: [Health]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Actualizado
 */
    const updateHealth = (req,resp) => {
    const {id} = req.params;
    const healthIndex = health.findIndex(health => newHealth.id === parseInt(id));
    if(healthIndex !== -1){
        health[healthIndex] = {...health[healthIndex], ...req.body};
        resp.status(200).json(health[healthIndex]);
    }else{
        resp.status(404).json({message: 'health not found'});
    }
};

/**
 *  @swagger
 *  /api/health/{id}:
 *   patch:
 *     summary: Actualiza solo el nombre del servicio
 *     tags: [Health]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Servicio actualizado
 */
    const updateService = (req,resp) => {
    const {id} = req.params;
    if(healt[id]){
        health[id].service = req.body.service || health[id].service;
        resp.status(200).json(health[id]);
    }else{
        resp.status(404).json({message: 'service not found'});
    }
};

/**
 *  @swagger
 *  /api/health/{id}:
 *   delete:
 *     summary: Elimina un registro
 *     tags: [Health]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       204:
 *         description: Eliminado
 */
const deleteHealth = (req,resp) => {
    const {id} = req.params;
    const healthIndex = health.findIndex(health => health.id === parseInt(id));
    if(healthIndex !== -1){
        health.splice(healthIndex, 1);
        resp.status(204).send();
    }else{
        resp.status(404).json({message: 'health not found'});
    }
};

module.exports = {getAllHealth, getHealthById, createHealth, updateHealth, updateService, deleteHealth};