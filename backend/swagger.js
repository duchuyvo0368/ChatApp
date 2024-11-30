// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Example',
      version: '1.0.0',
      description: 'API Example using Swagger and OpenAPI',
    },
    servers: [
      {
        url: 'http://localhost:5000', 
      },
    ],
  },
  apis: ['./router/*.js'], 
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
