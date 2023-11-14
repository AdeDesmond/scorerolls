import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("database connected");
    });
    connection.on("error", (err) => {
      console.log("database error", err);
      process.exit();
    });
  } catch (err: any) {
    throw new Error(err.message);
    console.log("something went wrong");
  }
};

export { connectDB };
