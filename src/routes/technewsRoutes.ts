import { Router } from "express";
import { getTechNews } from "../controllers/RssController";

const router = Router();

router.get("/", getTechNews);

export default router;
