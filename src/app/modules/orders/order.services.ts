import { isValidObjectId } from "mongoose";
import customError from "../../utils";
import Product from "../products/products.model";
import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDB = async (payload: IOrder) => {
  // check product id valid or not
  if (!isValidObjectId(payload.productId)) {
    throw customError(false, 400, "Invalid product id");
  }

  // find product from db
  const product = await Product.findById(payload.productId);

  // check product is available on the database or not
  if (!product) {
    throw customError(false, 404, "Product not found");
  }

  const modifiedObj: IOrder = {
    ...payload,
    price: product.price,
  };

  if (payload.quantity > product.inventory.quantity) {
    throw customError(
      false,
      400,
      "Insufficient quantity available in inventory",
    );
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
