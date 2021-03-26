const express = require('express');
const router = express.Router();
const {billPayments} = require('../controllers');

router.post('/outlet-balance', billPayments.getOutletBalance);
router.post('/validate-topup', billPayments.validateTopUpWallet);
router.post('/process-topup', billPayments.processTopUpWallet);
router.post('/topup-transaction-inquiry', billPayments.topUpTransactionInquiry);
router.post('/process-reservation-detail', billPayments.processReservationDetail);
router.post('/validate-payment-reservation-detail', billPayments.validateReservationPaymentDetail);
router.post('/process-payment-reservation-detail', billPayments.processReservationPaymentDetail);
router.post('/reservation-payment-inquiry', billPayments.reservationPaymentEnquiry);
router.post('/pull-transaction-detail', billPayments.pullTransactionDetails);
router.post('/validate-billing', billPayments.validateBilling);
router.post('/process-billing', billPayments.processBilling);

module.exports = router;