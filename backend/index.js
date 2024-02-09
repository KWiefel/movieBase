import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { movieRouter, userRouter } from "./src/routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("wir sind online ;)"));

app.use("/api/v1/movies", movieRouter.default);
app.use("/api/v1/user", userRouter.default);

app.listen(PORT, () => console.log("Server listening on port", PORT));
