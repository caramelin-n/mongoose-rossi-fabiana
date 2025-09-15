import express from "express";
import db from "./src/config/db.js";
import dotenv from "dotenv";
import userRouter from "./src/routes/userRoutes.js";
import directorRouter from "./src/routes/directorRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/directors', directorRouter);

app.listen(port, async () => {
    await db();
    console.log("Servidor corriendo en el puerto", port);
});

