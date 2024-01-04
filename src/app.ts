import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { db } from "./models";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";
import technewsRoutes from "./routes/technewsRoutes";

const cors = require("cors");

const app = express();
const corsOptions = {
  origin: ["http://localhost:4200", "http://localhost:3005"]
};

app.use(cors(corsOptions));
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/technode/post", postRoutes);
app.use("/technode/user", userRoutes);
app.use("/technode/technews", technewsRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).end();
});

// Syncing our database
db.sync({ alter: false }).then(() => {
  console.info("connected to the database!");
});

app.listen(3004);
