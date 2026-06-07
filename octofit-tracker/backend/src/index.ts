import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/octofit";

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "OctoFit Tracker backend is running." });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", port: PORT, mongo: MONGO_URI });
});

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
