const express = require('express');
const router = express.Router();
const {ibgPayments} = require('../controllers');

router.post('/validate-payment', ibgPayments.validatePayment);
router.post('/process-payment', ibgPayments.processPayment);
router.post('/validate-short-term-loan', ibgPayments.validateShortTermLoan);
router.post('/process-short-term-loan', ibgPayments.processShortTermLoan);
router.post('/validate-housing-loan', ibgPayments.validateHousingLoan);
router.post('/process-housing-loan', ibgPayments.processHousingLoan);
router.post('/payment-transaction-inquiry', ibgPayments.IbgPaymentTransactionInquiry);
router.post('/short-term-loan-transaction-inquiry', ibgPayments.IbgShortTermLoanTransactionIquiry);
router.post('/housing-loan-transaction-inquiry', ibgPayments.IbgHousingLoanTransactionIquiry);
router.post('/cancel-payment', ibgPayments.IbgCancelPaymentTransaction);
router.post('/cancel-short-term-loan', ibgPayments.cancelShortTermLoanTransaction);
router.post('/cancel-housing-loan', ibgPayments.cancelHousingLoanTransaction);



module.exports = router;