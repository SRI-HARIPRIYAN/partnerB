import { Router } from "express";
import { getCategory } from "../controller/user.controller";

const router = Router();

router.get("/category", getCategory);
router.post("/category", postCategory);
export default router;
