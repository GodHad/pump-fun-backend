import mongoose from "mongoose";

require("dotenv").config("../.env");
const DB_CONNECTION = process.env.MONGODB_URI;

export const init = () => {
  if (DB_CONNECTION === undefined) return;
  if (mongoose.connection.readyState === mongoose.ConnectionStates.connected)
    return;
  mongoose
    .connect(DB_CONNECTION)
    .then((v) => {
      console.log(`mongodb database connected`);
    })
    .catch((e) => {
      console.error(`mongodb error ${e}`);
    });
};
