export type TCustomError = {
  success: boolean;
  status: number;
  message: string;
};

function customError(
  success: boolean = false,
  status: number = 500,
  message: string = "something went wrong",
) {
  const err: Partial<TCustomError> = new Error(message);
  err.success = success;
  err.status = status;
  return err;
}

export default customError;
