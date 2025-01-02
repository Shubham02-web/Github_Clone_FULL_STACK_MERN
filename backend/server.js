import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import UserRouter from "./routes/userRoute.js";
import ExploreRouter from "./routes/exploreRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;
app.get("/", (req, res, send) => {
  res.send("Server Is Running");
});
app.use(cors());
app.use("/api/v1", UserRouter);
app.use("/api/v1", ExploreRouter);

app.listen(PORT, () => {
  console.log(`app is listning on the URL http://localhost:${PORT}`);
});
