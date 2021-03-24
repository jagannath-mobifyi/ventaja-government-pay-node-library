const express = require('express');
const { sssPaymentController } = require('../controllers');
const router = express.Router();

router.post('/contribution/validate', sssPaymentController.validateContributionSearchPrnByMember);


module.exports = router;