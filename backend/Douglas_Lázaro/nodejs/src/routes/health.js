const express = require("express");
const {getAllHealth, getHealthById, createHealth, updateHealth, updateService, deleteHealth} = require("../api/health");
const router = express.Router();

router.get('/', getAllHealth);
router.get('/:id', getHealthById);
router.post('/', createHealth);
router.put('/:id', updateHealth);
router.patch('/:id/service', updateService);
router.delete('/:id', deleteHealth);

module.exports = router;
