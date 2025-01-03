import mongoose from "mongoose";
import AdminData from '../models/AdminData';

require("dotenv").config("../.env");
const DB_CONNECTION = process.env.MONGODB_URI;

export const init = () => {
  if (DB_CONNECTION === undefined) return;
  if (mongoose.connection.readyState === mongoose.ConnectionStates.connected)
    return;
  mongoose
    .connect(DB_CONNECTION)
    .then(async (v) => {
      console.log(`mongodb database connected`);
      const adminData = await AdminData.findOne();
      if (!adminData) {
        const newAdminData = new AdminData({
          admin: ['0x1066f339C393Cd41D1acF0f0AAE7CDE9f3B30596']
        });
        await newAdminData.save()
      }
    })
    .catch((e) => {
      console.error(`mongodb error ${e}`);
    });
};
