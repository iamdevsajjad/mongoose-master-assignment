import { z } from "zod";

const productValidationSchema = z.object({
  name: z
    .string({
      required_error: "Product name is required",
      invalid_type_error: "Product name must be a string",
    })
    .min(1, { message: "Product name cannot be empty" }),
  description: z
    .string({
      required_error: "Product description is required",
      invalid_type_error: "Product description must be a string",
    })
    .min(10, {
      message: "Product description must be at least 10 characters long",
    }),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .min(1, { message: "Price must be greater than 0" }),
  category: z
    .string({
      required_error: "Product category is required",
      invalid_type_error: "Product category must be a string",
    })
    .min(3, { message: "Product category must be at least 3 characters long" }),
  tags: z
    .array(
      z.string({
        required_error: "Each tag must be a string",
        invalid_type_error: "Tags must be an array of strings",
      }),
    )
    .min(1, { message: "At least one tag is required" }),
  variants: z
    .array(
      z.object({
        type: z
          .string({
            required_error: "Variant type is required",
            invalid_type_error: "Variant type must be a string",
          })
          .min(1, { message: "Variant type cannot be empty" }),
        value: z
          .string({
            required_error: "Variant value is required",
            invalid_type_error: "Variant value must be a string",
          })
          .min(1, { message: "Variant value cannot be empty" }),
      }),
    )
    .min(1, { message: "At least one variant is required" }),
  inventory: z.object({
    quantity: z
      .number({
        required_error: "Quantity is required",
        invalid_type_error: "Quantity must be a number",
      })
      .int({ message: "Quantity must be an integer" })
      .min(0, { message: "Quantity must be a non-negative integer" }),
    inStock: z
      .boolean({
        invalid_type_error: "InStock must be a boolean",
      })
      .optional(),
  }),
});

export default productValidationSchema;
