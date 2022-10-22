import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        favorites: {
            type: Array,
            default: [113988, 94997],
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
