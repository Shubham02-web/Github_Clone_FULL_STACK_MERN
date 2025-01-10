import express from "express";
import passport from "passport";
import dotenv from "dotenv";

dotenv.config();
const Router = express.Router();

Router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);
Router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: process.env.CLIENT_BASE_URL + "/login",
  }),
  function (req, res) {
    res.redirect(process.env.CLIENT_BASE_URL);
  }
);

Router.get("/check", (req, res) => {
  if (req.isAuthenticated()) {
    res.send({ user: req.user });
  } else {
    res.send({ user: null });
  }
});

Router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.json({ message: "LogOut" });
  });
});

export default Router;
