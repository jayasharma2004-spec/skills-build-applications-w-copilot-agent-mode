import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "List activities (placeholder)" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create activity (placeholder)", body: req.body });
});

export default router;
