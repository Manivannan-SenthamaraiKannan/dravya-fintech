import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    userID: { type: String, unique: true, required: true },
    mobileNumber: { type: String, unique: true, required: true },
    name: String,
    email: { type: String, unique: true, required: true },
    password: String,
    createdAt: { type: Date, default: Date.now },
});

export default models.User || model("User", UserSchema);
