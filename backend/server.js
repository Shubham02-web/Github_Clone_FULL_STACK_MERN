import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import "./passport/passport_auth.js";
import UserRouter from "./routes/userRoute.js";
import ExploreRouter from "./routes/exploreRoute.js";
import CONNECT_MONGO_DB from "./db/connectDB.js";
import authRouter from "./routes/authRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, send) => {
  res.send("Server Is Running");
});
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/v1", UserRouter);
app.use("/api/v1", ExploreRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`app is listning on the URL http://localhost:${PORT}`);
  CONNECT_MONGO_DB();
});
