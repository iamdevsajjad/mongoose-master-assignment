import { Router } from "express";
import { productsController } from "./products.controllers";

const router = Router();

router.post("/", productsController.addProduct);

router.get("/", productsController.getAllProduct);

router.get("/:id", productsController.getAProduct);

export default router;
