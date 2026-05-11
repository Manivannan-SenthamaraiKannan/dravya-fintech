import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    fullName: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    mobile: { type: String, unique: true, required: true },
    panNumber: { type: String, unique: true, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    bankName: { type: String, required: true },
    accountNumber: { type: String, unique: true, required: true },
    ifscCode: { type: String, unique: true, required: true },
    accountType: { type: String, required: true },
    trialPlan: { type: String, default: true },
    segments: { type: [String], required: true },
    hasAgreeedToTerms: { type: Boolean, required: true },
    referralCode: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default models.User || model("User", UserSchema);
