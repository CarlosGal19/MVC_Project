import mongoose from "mongoose";

export default function connectDB() {
  const url = process.env.MONGO_URI;

  try {
    mongoose.connect(url);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log('Database connected');
  });

  dbConnection.on("error", (err) => {
    console.error('connection error');
  });
  return;
}
