import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import productsRoutes from "./app/modules/products/products.routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("hello this is Mongoose master");
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.send(error.message);
});

export default app;
