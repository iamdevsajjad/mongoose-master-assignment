import { Router } from "express";
import { productsController } from "./products.controllers";

const router = Router();

router.post("/", productsController.addProduct);

router.get("/", productsController.getAllProduct);

export default router;
