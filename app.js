import express from "express";
import db from "./src/config/db.js";
import dotenv from "dotenv";
import userRouter from "./src/routes/userRoutes.js";
import directorRouter from "./src/routes/directorRoutes.js";
import profileRouter from "./src/routes/profileRoutes.js";
import movieRouter from "./src/routes/movieRouters.js";
import wlRouter from "./src/routes/watchlistRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/directors', directorRouter);
app.use('/api/profile', profileRouter);
app.use('/api/movies', movieRouter);
app.use('/api/watchlist', wlRouter);

app.listen(port, async () => {
    await db();
    console.log("Servidor corriendo en el puerto", port);
});

