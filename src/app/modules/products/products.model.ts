import { Schema, model } from "mongoose";
import { IProduct } from "./products.interface";

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
  },
  tags: {
    type: [String],
    required: [true, "Product tags are required"],
  },
  variants: {
    type: [
      {
        type: {
          type: String,
        },
        value: {
          type: String,
        },
      },
    ],
    required: [true, "Product variants are required"],
  },
  inventory: {
    type: {
      quantity: {
        type: Number,
        default: 0,
      },
      inStock: {
        type: Boolean,
        default: function () {
          // Default value for inStock based on quantity
          return this.quantity > 0;
        },
      },
    },
    required: [true, "Product inventory is required"],
  },
});

const Product = model<IProduct>("Product", productSchema);

export default Product;
