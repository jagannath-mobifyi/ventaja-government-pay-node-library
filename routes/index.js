const express = require('express');
const router = express.Router();
const philHealthRoute  = require('./philhealth')
const sssPaymentRoute = require('./sssPayment');
const ibgPayments = require('./ibgPayments');
const billPayment = require('./billPayment');



router.use('/philhealth',philHealthRoute)
router.use('/sss-payment', sssPaymentRoute)
router.use('/ibg', ibgPayments)
router.use('/bill-payment', billPayment)


module.exports = router;