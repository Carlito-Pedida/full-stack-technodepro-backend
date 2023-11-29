import { Router } from "express";
import {
  deletePost,
  getAllPosts,
  getOnePost,
  updatePost,
  getPostByUser,
  writePost,
  imagePost,
  createPost
} from "../controllers/postController";

const router = Router();

router.get("/", getAllPosts);

router.post("/", createPost);

router.post("/write", writePost);

router.post("/image", imagePost);

router.get("/:postId", getOnePost);

router.get("/:userId", getPostByUser);

router.put("/:postId", updatePost);

router.delete("/:postId", deletePost);

export default router;
