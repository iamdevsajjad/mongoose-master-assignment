import { NextFunction, Request, Response } from "express";
import { productServices } from "./product.services";

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productData = req.body;
    const data = await productServices.addProductOnDB(productData);
    res.send({
      success: true,
      message: "Product created successfully!",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};
const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await productServices.fetchAllProductsFromDB();
    res.send({
      success: true,
      message: "Products fetched successfully!",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

export const productsController = {
  addProduct,
  getAllProduct,
};
