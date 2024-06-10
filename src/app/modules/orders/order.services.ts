import { Response } from "express";
import { isValidObjectId } from "mongoose";
import Product from "../products/products.model";
import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDB = async (payload: IOrder, res: Response) => {
  // check product id valid or not
  if (!isValidObjectId(payload.productId)) {
    return res.status(404).send({
      success: false,
      message: "Product id invalid",
    });
  }

  // find product from db
  const product = await Product.findById(payload.productId);

  // check product is available on the database or not
  if (!product) {
    return res.status(404).send({
      success: false,
      message: "Product not found",
    });
  }

  const modifiedObj: IOrder = {
    ...payload,
    price: product.price,
  };

  if (payload.quantity > product.inventory.quantity) {
    return res.status(404).send({
      success: false,
      message: "Insufficient quantity available in inventory",
    });
  }

  product.inventory.quantity = product.inventory.quantity - payload.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  return await Order.create(modifiedObj);
};

const getAllOrderFromDB = (email: string) => {
  if (email) {
    return Order.find({
      email: { $regex: email, $options: "i" },
    });
  }

  return Order.find();
};

export { createOrderIntoDB, getAllOrderFromDB };
