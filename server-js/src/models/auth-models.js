import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    password: { type: String, required: true },
})

const UserModel = mongoose.model("user", userSchema);

export default UserModel;