import express from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";
import { explorePopularRepos } from "../controller/exploreController.js";

const router = express.Router();

router.get("/repos/:language", ensureAuthenticated, explorePopularRepos);

export default router;