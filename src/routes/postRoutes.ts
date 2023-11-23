import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getOnePost,
  updatePost,
  getPostByUser
} from "../controllers/postController";

const router = Router();

router.get("/", getAllPosts);

router.post("/", createPost);

router.get("/:postId", getOnePost);

router.get("/:userId", getPostByUser);

router.put("/:postId", updatePost);

router.delete("/:postId", deletePost);

export default router;
