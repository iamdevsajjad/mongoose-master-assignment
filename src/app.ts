import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import orderRoutes from "./app/modules/orders/order.routes";
import productsRoutes from "./app/modules/products/products.routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productsRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("hello this is Mongoose master");
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    success: false,
    message: "route not found",
  });
});

export default app;
