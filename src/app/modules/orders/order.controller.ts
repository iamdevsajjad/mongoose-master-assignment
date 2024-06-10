import { NextFunction, Request, Response } from "express";
import { IOrder } from "./order.interface";
import { createOrderIntoDB, getAllOrderFromDB } from "./order.services";
import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, success, error } = orderValidationSchema.safeParse(req.body);

    if (!success) {
      return res.status(400).json({
        success: false,
        message: error.errors,
      });
    }

    const result = await createOrderIntoDB(data as IOrder, res);

    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.query;
    const result = await getAllOrderFromDB(email as string);

    if (result.length <= 0) {
      return res.status(404).send({
        success: false,
        message: "Order not found",
      });
    }

    if (email) {
      return res.status(200).json({
        message: `Orders fetched successfully for user email '${email}'!`,
        data: result,
      });
    }

    res.status(200).json({
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export { createOrder, getAll };
