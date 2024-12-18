"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/User.js
const mongoose_1 = __importDefault(require("mongoose"));
const PINATA_GATEWAY_URL = process.env.PINATA_GATEWAY_URL;
const defualtImg = process.env.DEFAULT_IMG_HASH;
const userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, },
    wallet: { type: String, required: true, unique: true },
    avatar: { type: String, default: `${PINATA_GATEWAY_URL}/${defualtImg}` }
});
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
