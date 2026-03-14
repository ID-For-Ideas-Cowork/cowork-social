const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const healthRoutes = require("./routes/health");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.use("/api/health", healthRoutes);

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CoWork Social API",
      version: "1.0.0",
      description: "API REST para CoWork Social - Datos Mock",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
// TODO: Uncomment based on your task
// const usersRouter = require('./routes/users');      // BE-01
// const postsRouter = require('./routes/posts');      // BE-02

// app.use('/api/users', usersRouter);                 // BE-01
// app.use('/api/posts', postsRouter);                 // BE-02

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "CoWork Social API",
    documentation: "/api-docs",
    endpoints: {
      health: "/api/health",
      users: "/api/users", // BE-01
      posts: "/api/posts", // BE-02
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 API Docs available at http://localhost:${PORT}/api-docs`);
});

module.exports = app;
