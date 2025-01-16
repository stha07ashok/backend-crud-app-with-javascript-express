import express from "express";
import { insertUser } from "../controller/insertController.js";
import { getUser } from "../controller/getController.js";

const router = express.Router();

router.get("/", insertUser);
router.get("/get", getUser);

export default router;
