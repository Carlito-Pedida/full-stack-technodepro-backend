import { Router } from "express";
import {
  createUser,
  getCurrentUser,
  getPostByUser,
  getAllUsers,
  getUserPosts,
  loginUser,
  getUserById,
  updateProfile
  //getProfile
} from "../controllers/userController";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.post("/login", loginUser);
router.post("/:userId", getUserById);
router.get("/current/:userId", getCurrentUser);
router.get("/userposts/:userId", getPostByUser);
router.get("/posts/:userId", getUserPosts);
router.put("/:userId", updateProfile);

export default router;
