const express = require('express');
const { sssPaymentController } = require('../controllers');
const router = express.Router();

router.post('/contribution/searchprnbymember/validate', sssPaymentController.validateContributionSearchPrnByMember);
router.post('/contribution/searchprnbymember/process', sssPaymentController.validateContributionSearchPrnByMember);
router.post('/contribution/searchbyprn/validate', sssPaymentController.validateContributionSearchByPrn);
router.post('/contribution/searchbyprn/process', sssPaymentController.processContributionSearchByPrn);
router.post('/contribution/createandpay/validate', sssPaymentController.validateContributionCreateAndPayPrn);
router.post('/contribution/createandpay/process', sssPaymentController.processContributionCreateAndPayPrn);
router.post('/contribution/payforprn/validate', sssPaymentController.validateContributionPayForPrn);
router.post('/contribution/payforprn/process', sssPaymentController.processContributionPayForPrn);

router.post('/short-term-loan/searchbyrtplprn/validate', sssPaymentController.validateSearchByRtplPrn);
router.post('/short-term-loan/searchbyrtplprn/process', sssPaymentController.processSearchByRtplPrn);
router.post('/short-term-loan/payforrtplprn/validate', sssPaymentController.validatePayForRtplPrn);
router.post('/short-term-loan/payforrtplprn/process', sssPaymentController.processPayForRtplPrn);

router.post('/contribution/real-estate-loan/validate', sssPaymentController.validateRealEstateLoanPayment);
router.post('/contribution/real-estate-loan/process', sssPaymentController.processRealEstateLoanPayment);

router.post('/contribution/miscellaneous/validate', sssPaymentController.validateMiscellaneousPayment);
router.post('/contribution/miscellaneous/process', sssPaymentController.processMiscellaneousPayment);

router.post('/contribution/inquiry', sssPaymentController.inquiryContributionTransaction);
router.post('/short-term-loan/inquiry', sssPaymentController.inquiryShortTermLoanTransaction);
router.post('/real-estate-loan/inquiry', sssPaymentController.inquiryRealEstateLoanTransaction);
router.post('/miscellaneous/inquiry', sssPaymentController.inquiryMiscellaneousTransaction);

router.post('/real-estate-loan/cancel', sssPaymentController.inquiryRealEstateLoanTransaction);
router.post('/miscellaneous/cancel', sssPaymentController.cancelMiscellaneousTransaction);


module.exports = router;