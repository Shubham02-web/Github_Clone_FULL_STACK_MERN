import express from "express";
import passport from "passport";

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

export default Router;
