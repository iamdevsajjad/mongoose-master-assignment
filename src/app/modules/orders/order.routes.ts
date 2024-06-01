import { Router } from "express";
import { createOrder, getAll } from "./order.controller";

const router = Router();

router.post("/", createOrder);
router.get("/", getAll);

export default router;
