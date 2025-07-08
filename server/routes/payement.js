const express = require("express");
const axios = require("axios");
const crypto = require("crypto");
require("dotenv").config();
const BASE_URL = require("../constant");
const paymentRouter = express.Router();

const key = process.env.EASEBUZZ_KEY;
const salt = process.env.EASEBUZZ_SALT;

paymentRouter.post("/pay", async (req, res) => {
    const { amount, firstname, email, phone, productinfo } = req.body;

    const txnid = crypto.randomBytes(8).toString("hex");

    const hashString = [key, txnid, amount, productinfo, firstname, email, salt].join("|");
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    const surl = "http://localhost:3000/payment/success";
    const furl = "http://localhost:3000/payment/failure";

    const formData = {
        key,
        txnid,
        amount,
        firstname,
        email,
        phone,
        productinfo,
        surl,
        furl,
        hash,
    };

    try {
        const { data } = await axios.post(`${BASE_URL}/payment/initiateLink`, new URLSearchParams(formData), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        if (data.status === 1) {
            return res.json({ redirectURL: data.data });
        } else {
            return res.status(400).json({ error: data.message });
        }
    } catch (err) {
        console.error("Payment error:", err);
        res.status(500).json({ error: "Payment initiation failed" });
    }
});

module.exports = paymentRouter;
