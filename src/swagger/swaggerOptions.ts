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
        url: "http://localhost:2002/api/v1",
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
