import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "List workouts (placeholder)" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create workout (placeholder)", body: req.body });
});

export default router;
