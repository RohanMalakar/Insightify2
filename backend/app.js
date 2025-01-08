import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
import langflowRoutes from "./routes/LangFlow.route.js";

const app = express();
const _dirname = path.resolve();

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api/v1/langflow", langflowRoutes); // Mount the Langflow routes

// Serve static assets in production
  app.get("/", (req, res) => {
    res.send("API is Running Successfully");
  });

  app.use("*", (req, res) => {
    res.send("Invalid Endpoint");
  }
);


// Export the app for deployment
export { app };
