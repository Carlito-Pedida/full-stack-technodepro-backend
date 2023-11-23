import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { db } from "./models";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:4200", "http://localhost:3005"]
};

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

// routes
app.use("/technode/post", postRoutes);
app.use("/technode/user", userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).end();
});

// Syncing our database
db.sync({ alter: false }).then(() => {
  console.info("connected to the database!");
});

app.listen(3004);
