import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "List teams (placeholder)" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create team (placeholder)", body: req.body });
});

export default router;
