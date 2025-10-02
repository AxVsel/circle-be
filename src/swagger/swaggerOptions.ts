// src/swagger/swaggerOptions.ts
export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Circle API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:2002/api/v1", // untuk development
        description: "Local server",
      },
      {
        url: "https://circle-be-production-6eed.up.railway.app/api/v1", // untuk production
        description: "Production server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/**/*.ts"],
};
