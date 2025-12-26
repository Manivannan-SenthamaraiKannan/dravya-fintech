import { Schema, models, model } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema({
    tradingUserID: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    dateOfBirth: Date,
    gender: { type: String,unique: true, required: true },
    email: { type: String, unique: true, required: true },
    address: {type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
    mobilenumber: { type: String, unique: true, required: true },
    pincode: { type: String, unique: true, required: true },
});

export default models.User || model("User", UserSchema);
