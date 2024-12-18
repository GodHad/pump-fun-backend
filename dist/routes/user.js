"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/users.js
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const PendingUser_1 = __importDefault(require("../models/PendingUser"));
const crypto_1 = __importDefault(require("crypto"));
const joi_1 = __importDefault(require("joi"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
// @route   POST api/users
// @desc    Resgister user
// @access  Public
router.post('/', async (req, res) => {
    console.log("wallet connect");
    // Validate form
    const { body } = req;
    const UserSchema = joi_1.default.object().keys({
        name: joi_1.default.string().required(),
        wallet: joi_1.default.string().required(),
        isLedger: joi_1.default.boolean().optional().required(),
    });
    const inputValidation = UserSchema.validate(body);
    if (inputValidation.error) {
        return res.status(400).json({ error: inputValidation.error.details[0].message });
    }
    const wallet = body.wallet;
    const userData = await User_1.default.findOne({ wallet });
    console.log("userdata:", userData);
    console.log(!userData == false);
    if (!userData == false)
        return res.status(200).send(userData);
    const exisitingPendingUser = await PendingUser_1.default.findOne({ wallet });
    console.log("pending:", exisitingPendingUser);
    if (exisitingPendingUser == null) {
        const nonce = crypto_1.default.randomBytes(8).toString('hex');
        const newPendingUser = new PendingUser_1.default({ name: body.name, wallet, nonce, isLedger: body.isLedger });
        const user = await newPendingUser.save();
        // .then((user) => {
        //     console.log("Saved user::", user);
        res.status(200).send(user);
        // })
        // .catch((error) => {
        //     console.error("Error saving user::", error);
        //     res.status(500).json({ message: "Failed to save user", error });
        // });
    }
    else {
        res.status(400).json({ message: "A user with this wallet already requested." });
    }
});
// @route   POST api/users/login
// @desc    Resgister user
// @access  Public
router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const { wallet } = req.body;
        const user = await User_1.default.findOne({ wallet });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        else {
            console.log(user);
            const token = jsonwebtoken_1.default.sign({
                id: user._id,
                name: user.name,
                wallet
            }, 'secret', {
                algorithm: 'HS256',
                expiresIn: '60m',
            });
            return res.status(200).json({ token });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
// @route   POST api/users/:nonce
// @desc    Confirm and Register user
// @access  Public
router.post('/confirm', async (req, res) => {
    console.log("req.body:::", req.body);
    const body = {
        name: req.body.name,
        wallet: req.body.wallet,
        isLedger: req.body.isLedger,
        signature: req.body.signature,
        nonce: req.body.nonce,
    };
    console.log("body", body);
    // Validate form
    const UserSchema = joi_1.default.object().keys({
        name: joi_1.default.string().required(),
        wallet: joi_1.default.string().required(),
        nonce: joi_1.default.string().required(),
        signature: joi_1.default.string().required(),
        isLedger: joi_1.default.boolean().optional().required(),
    });
    const inputValidation = UserSchema.validate(body);
    console.log(inputValidation);
    if (inputValidation.error) {
        return res.status(400).json({ error: inputValidation.error.details[0].message });
    }
    console.log("validation OK");
    // const foundUser = await User.findOne({wallet : body.wallet})
    // if(!foundUser == null ) return res.status(400).json("First of all, You have to register User")
    const foundNonce = await PendingUser_1.default.findOneAndDelete({ nonce: body.nonce }).exec();
    if (foundNonce == null)
        return res.status(400).json("Your request expired");
    // nonce  decode!!
    // if (!body.isLedger) {
    //     const signatureUint8 = base58.decode(body.signature);
    //     const msgUint8 = new TextEncoder().encode(`${body.nonce}`);
    //     const pubKeyUint8 = base58.decode(body.wallet);
    //     const isValidSignature = nacl.sign.detached.verify(msgUint8, signatureUint8, pubKeyUint8);
    //     // const isValidSignature = true;
    //     if (!isValidSignature) return res.status(404).json({ error: "Invalid signature" })
    // } else {
    //     const ledgerSerializedTx = JSON.parse(body.signature);
    //     const signedTx = Transaction.from(Uint8Array.from(ledgerSerializedTx));
    //     const feePayer = signedTx.feePayer?.toBase58() || "";
    //     if (feePayer != body.wallet) {
    //         return res.status(400).json({ error: "Invalid wallet or fee payer" });
    //     }
    //     const MEMO_PROGRAM_ID = new PublicKey(
    //         "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
    //     );
    //     const inx = signedTx.instructions.find(
    //         (ix) => ix.programId.toBase58() == MEMO_PROGRAM_ID.toBase58()
    //     );
    //     if (!inx) {
    //         return res
    //             .status(503)
    //             .json({ error: "Memo program couldn't be verified" });
    //     }
    //     if (!signedTx.verifySignatures()) {
    //         return res
    //             .status(503)
    //             .json({ error: "Could not verify signatures" });
    //     }
    // }
    const userData = {
        name: body.name,
        wallet: body.wallet
    };
    const newUser = new User_1.default(userData);
    await newUser.save().then((user) => res.status(200).send(user));
});
// GET: Fetch user
router.get('/', async (req, res) => {
    try {
        const users = await User_1.default.find({});
        res.status(200).send(users);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// GET: Fetch all users
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const user = await User_1.default.findOne({ _id: id });
        res.status(200).send(user);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = router;
