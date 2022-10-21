import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import { users } from "./data/users.js";
import jwt from "jsonwebtoken";
import dbConnect from "./dbConnect.js";
import User from "./models/userModel.js";
import bcrypt from "bcryptjs";
import cors from "cors";

dbConnect();
const app = express();
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));
dotenv.config();

app.post("/api/users/register", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    } else {
        const user = await User.create({
            name,
            email,
            password,
        });
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    }
});

app.post("/api/users/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = user.password === password;
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    if (isMatch) {
        // sign in without jwt
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Hello from ${PORT}`);
});
