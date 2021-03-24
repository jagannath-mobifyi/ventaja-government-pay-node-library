const express = require('express');
const router = express.Router();
const philHealthRoute  = require('./philhealth')
const sssPaymentRoute  = require('./sssPayment')

router.use('/philhealth',philHealthRoute)
router.use('/sss-payment', sssPaymentRoute)

module.exports = router;