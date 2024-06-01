import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import orderRoutes from "./app/modules/orders/order.routes";
import productsRoutes from "./app/modules/products/products.routes";
import { TCustomError } from "./app/utils";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productsRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("hello this is Mongoose master");
});

app.use(
  (error: TCustomError, _req: Request, res: Response, _next: NextFunction) => {
    return res.status(error.status).json({
      success: error.success,
      message: error.message,
    });
  },
);

export default app;
