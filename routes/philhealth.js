const express = require('express');
const router = express.Router();
const {philHealthController} = require('../controllers');

router.post('/contribution/validate', philHealthController.validate);
router.post('/contribution/process', philHealthController.process);
router.post('/contribution/inquiry', philHealthController.inquiry);
router.post('/contribution/cancel', philHealthController.cancel);


module.exports = router;