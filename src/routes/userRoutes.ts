import { Router } from "express";
import {
  createUser,
  getCurrentUser,
  getPostByUser,
  getAllUsers,
  getUserPosts,
  loginUser,
  getUserById
  //getProfile
} from "../controllers/userController";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.post("/login", loginUser);
router.post("/:userId", getUserById);
router.get("/current/:userId", getCurrentUser);
//router.get("/current/:userId", getProfile);
router.get("/userposts/:userId", getPostByUser);
//router.get("/userposts", getUserPosts);
router.get("/posts/:userId", getUserPosts);

export default router;
