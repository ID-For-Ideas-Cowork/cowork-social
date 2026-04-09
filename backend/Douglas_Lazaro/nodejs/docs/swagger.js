const swaggerJsdoc = require('swagger-jsdoc');

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CoWork Social API',
      version: '1.0.0',
      description: 'API REST para CoWork Social - Datos Mock',
    },
    servers: [
      {
        url: 'https://redes-sociales-8eql.onrender.com',
        description: 'Production server',
      },
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
        description: 'Development server',
      }
    ],
  },
  apis: ['./src/api/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;