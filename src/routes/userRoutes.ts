import { Router } from "express";
import {
  createUser,
  getOneUser,
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
router.get("/:userId", getOneUser);
router.get("/userposts/:userId", getPostByUser);
router.get("/posts/:userId", getUserPosts);
router.put("/:userId", updateProfile);

export default router;
