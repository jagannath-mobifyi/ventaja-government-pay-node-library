const express = require("express");
const router = express.Router();
const philHealthRoute = require("./philhealth");
const sssPaymentRoute = require("./sssPayment");
const billPaymentRoute = require("./billPayment");

router.use("/philhealth", philHealthRoute);
router.use("/sss-payment", sssPaymentRoute);
router.use("/bill-payment", billPaymentRoute);

module.exports = router;
