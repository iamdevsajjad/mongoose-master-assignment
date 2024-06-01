import { z } from "zod";
const orderValidationSchema = z.object({
  email: z
    .string({
      invalid_type_error: "quantity must be number",
      required_error: "quantity is required",
    })
    .email({
      message: "provide a valid email address",
    }),
  productId: z.string({
    invalid_type_error: "productId must be number",
    required_error: "productId is required",
  }),
  price: z.number({
    invalid_type_error: "price must be number",
    required_error: "price is required",
  }),
  quantity: z.number({
    invalid_type_error: "quantity must be number",
    required_error: "quantity is required",
  }),
});

export default orderValidationSchema;
