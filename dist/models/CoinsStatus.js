"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/CoinStatus.js
const mongoose_1 = __importDefault(require("mongoose"));
const coinStatusSchema = new mongoose_1.default.Schema({
    coinId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Coin', required: true },
    record: [{
            holder: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
            holdingStatus: { type: Number, required: true },
            time: { type: Date, default: Date.now },
            amount: { type: Number, default: 0 },
            price: { type: Number, required: true },
            tx: { type: String, required: true }
        }]
});
const CoinStatus = mongoose_1.default.model('CoinStatus', coinStatusSchema);
exports.default = CoinStatus;
