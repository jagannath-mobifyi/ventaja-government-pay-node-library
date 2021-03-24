const express = require('express');
const router = express.Router();
const {philHealthController} = require('../controllers');

router.post('/contribution/validate', philHealthController.validate);


module.exports = router;