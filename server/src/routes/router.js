import express from "express";
import { insertUser } from "../controller/insertController.js";
import { getUser } from "../controller/getController.js";
import { deleteUser } from "../controller/deleteController.js";
import { updateUser } from "../controller/updateController.js";

const router = express.Router();

router.get("/get", getUser); //to get user
router.post("/post", insertUser); //to add user
router.delete("/delete/:id", deleteUser); //to delete user
router.put("/update/:id", updateUser);

export default router;
