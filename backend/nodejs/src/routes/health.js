const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: "backend-nodejs",
  });
});

router.get("/detailed", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    service: "backend-nodejs",
    version: "1.0.0",
  });
});

module.exports = router;
