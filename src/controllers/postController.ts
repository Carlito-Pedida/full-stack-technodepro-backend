import { RequestHandler } from "express";
import { Posts } from "../models/posts";
import { User } from "../models/user";
import { verifyUser } from "../services/auth";
const multer = require("multer");

const upload = multer({
  dest: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

export const getAllPosts: RequestHandler = async (req, res, next) => {
  let posts = await Posts.findAll({
    include: User
  });
  res.status(200).json(posts);
};

export const getPostByUser: RequestHandler = async (req, res, next) => {
  let user: User | null = await verifyUser(req);

  if (!user) {
    return res.status(403).send();
  }

  let posts = await Posts.findAll({});

  res.status(200).json(posts);
};

export const createPost: RequestHandler = async (req, res, next) => {
  let user: User | null = await verifyUser(req);

  if (!user) {
    return res.status(403).send();
  }

  let newPost: Posts = req.body;
  newPost.userId = user.userId;

  if (newPost.post || newPost.imageUrl) {
    let created = await Posts.create(newPost);
    res.status(201).json(created);
  } else {
    res.status(400).send();
  }
};

export const writePost: RequestHandler = async (req, res, next) => {
  let user: User | null = await verifyUser(req);

  if (!user) {
    return res.status(403).send();
  }

  let newPost: Posts = req.body;
  newPost.userId = user.userId;

  if (newPost.post) {
    let created = await Posts.create(newPost);
    res.status(201).json(created);
  } else {
    res.status(400).send();
  }
};
export const imagePost: RequestHandler = async (req, res, next) => {
  let user: User | null = await verifyUser(req);

  if (!user) {
    return res.status(403).send();
  }

  let newImagePost: Posts = req.body;
  newImagePost.userId = user.userId;

  if (newImagePost.imageUrl) {
    let created = await Posts.create(newImagePost);
    res.status(201).json(created);
  } else {
    res.status(400).send();
  }
};

export const getOnePost: RequestHandler = async (req, res, next) => {
  let postId = req.params.postId;
  let postFound = await Posts.findByPk(postId);
  if (postFound) {
    res.status(200).json(postFound);
  } else {
    res.status(400).json({});
  }
};

// export const getOnePost: RequestHandler = async (req, res, next) => {
//   let user: User | null = await verifyUser(req);

//   if (user) {
//     let postId = req.params.postId;
//     let postItem: Posts | null = await Posts.findByPk(postId);
//     if (postItem) {
//       res.status(200).json(postItem);
//     }
//   } else {
//     res.status(404).json();
//   }
// };
export const updatePost: RequestHandler = async (req, res, next) => {
  let user: User | null = await verifyUser(req);

  if (user) {
    let postId = req.params.postId;
    let updatedPost: Posts = req.body;

    updatedPost.userId = user.userId;

    let postFound = await Posts.findByPk(postId);

    postFound &&
      postFound.postId == updatedPost.postId &&
      updatedPost.post &&
      updatedPost.imageUrl &&
      updatedPost.userId;
    {
      await Posts.update(updatedPost, {
        where: { postId: parseInt(postId) }
      }).then;
    }
    res.status(200).json(updatedPost);
  } else {
    res.status(400).json();
  }
};

export const deletePost: RequestHandler = async (req, res, next) => {
  let user: User | null = await verifyUser(req);

  if (user) {
    let postId = req.params.postId;
    let postFound = await Posts.findByPk(postId);

    if (postFound) {
      if (postFound.userId == user.userId) {
        await postFound.destroy();
        res.status(200).json("Post Deleted");
      }
    } else {
      res.status(403).json("Not Authorized");
    }
  } else {
    res.status(401).json("Not Logged in");
  }
};
