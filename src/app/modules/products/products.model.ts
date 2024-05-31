import mongoose, { Schema } from "mongoose";
import { IProducts } from "./products.interface";

const productSchema = new Schema<IProducts>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: {
    type: [{ type: { type: String }, value: { type: String } }],
    required: true,
  },
  inventory: { type: { quantity: Number, inStock: Boolean }, required: true },
});

const Product = mongoose.model<IProducts>("Product", productSchema);

export default Product;
