import express, { Router } from "express";
import { getUserProfileAndRepos } from "../controller/userController.js";
const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);

export default router;
