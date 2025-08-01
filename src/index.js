import express from "express";
import cors from "cors";
import config from "./config/config.js";
import userRoutes from "./routes/users.routes.js";

const app = express();

// middlewares
app.use(express.json());
cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  maxAge: 2592000, // un mes public, luego configuramos para que sea privado
});

// rutas de usuarios brow
app.use(userRoutes);


app.listen(
  config.port,
  console.log(`server listening on port: ${config.port}`)
);
