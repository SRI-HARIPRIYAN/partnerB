import { Router } from "express";
import { getCategory } from "../controller/user.controller.js";
import { postNewCategory } from "../controller/user.controller.js";

const router = Router();

router.get("/category", getCategory);
router.post("/category", postNewCategory);
export default router;
