import express from "express";
import { connectDatabase } from "./config/database";
import usersRouter from "./routes/users";
import teamsRouter from "./routes/teams";
import activitiesRouter from "./routes/activities";
import leaderboardRouter from "./routes/leaderboard";
import workoutsRouter from "./routes/workouts";

const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "OctoFit Tracker backend is running." });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", port: PORT });
});

app.use("/api/users", usersRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/activities", activitiesRouter);
app.use("/api/leaderboard", leaderboardRouter);
app.use("/api/workouts", workoutsRouter);

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1);
  });
