const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const app = express();
const PORT = process.env.PORT || 5000;

// Importar rutas
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const healthRoutes = require("./routes/health");
const commentsRouter = require("./routes/comments");
const swaggerSpec = require('../docs/swagger');


// Middleware
app.use(cors());
app.use(express.json());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/users', usersRouter);                 // BE-01
app.use('/api/posts', postsRouter);                 // BE-02
app.use('/api/health', healthRoutes);               // BE-03
app.use('/api', commentsRouter);                    // BE-04

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "CoWork Social API",
    documentation: "/api-docs",
    endpoints: {
      users: "/api/users", // BE-01
      posts: "/api/posts", // BE-02
      health: "/api/health", // BE-03
      comments: "/api/comments" // BE-04
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 API Docs available at http://localhost:${PORT}/api-docs`);
});

module.exports = app;
