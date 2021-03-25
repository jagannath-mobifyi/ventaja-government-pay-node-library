const express = require("express");
const router = express.Router();
const { billPaymentController } = require("../controllers");

router.post("/outlet-balance", billPaymentController.outletBalance);
router.post("/validate-topup", billPaymentController.validateTopup);
router.post("/process-topup", billPaymentController.processTopup);
router.post(
  "/topup-transaction-inquiry",
  billPaymentController.topupTransactionInquiry
);
router.post(
  "/process-reservation-detail",
  billPaymentController.processReservation
);
router.post(
  "/validate-payment-reservation-detail",
  billPaymentController.validatePaymentReservation
);
router.post(
  "/process-payment-reservation-detail",
  billPaymentController.processPaymentReservation
);
router.post(
  "/reservation-payment-inquiry",
  billPaymentController.reservationPaymentInquiry
);
router.post(
  "/pull-transaction-detail",
  billPaymentController.pullTransactionDetail
);
router.post("/validate-billing", billPaymentController.validateBilling);
router.post("/process-billing", billPaymentController.processBilling);

module.exports = router;
