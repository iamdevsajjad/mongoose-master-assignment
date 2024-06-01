import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const port = 5000;

async function main() {
  try {
    await mongoose.connect(config.dbUrl as string);

    app.listen(config.port || port, () => {
      // eslint-disable-next-line no-console
      console.log(`server is running on port ${config.port || port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

main();
