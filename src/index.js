import express from "express";
import cors from "cors";
import config from "./config/config.js";
import userRoutes from "./routes/users.routes.js";
import postRoutes from "./routes/posts.routes.js";
import likeRoutes from "./routes/likes.routes.js";
import commentRoutes from "./routes/comments.routes.js";

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

// listo, corregido
app.use(postRoutes);

app.use(likeRoutes);
app.use(commentRoutes);

app.listen(
  config.port,
  console.log(`Server listening on port: ${config.port}`)
);
