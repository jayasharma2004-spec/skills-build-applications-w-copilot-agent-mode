import { Router } from "express";

const router = Router();

// Basic placeholder routes for users
router.get("/", (req, res) => {
  res.json({ message: "List users (placeholder)" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create user (placeholder)", body: req.body });
});

export default router;
