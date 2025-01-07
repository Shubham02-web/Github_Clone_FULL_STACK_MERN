import mongoose from "mongoose";
export default async function CONNECT_MONGO_DB() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log(`error while connecting dataBase ${error.message}`);
  }
}
