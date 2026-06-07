import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/octofit_db";

// Seed script: populates test data for octofit_db
async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB for seeding:", MONGO_URI);

  // Minimal inline schema definitions for seed purposes
  const userSchema = new mongoose.Schema({ name: String, email: String });
  const teamSchema = new mongoose.Schema({ name: String, members: [String] });

  const User = mongoose.model("User", userSchema);
  const Team = mongoose.model("Team", teamSchema);

  await User.create([{ name: "Alice", email: "alice@example.com" }, { name: "Bob", email: "bob@example.com" }]);
  await Team.create([{ name: "Team A", members: ["Alice"] }, { name: "Team B", members: ["Bob"] }]);

  console.log("Seed complete: created sample users and teams.");
  await mongoose.disconnect();
}

if (require.main === module) {
  seed()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Seed error:", err);
      process.exit(1);
    });
}

export default seed;
