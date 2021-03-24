const express = require('express');
const router = express.Router();
const philHealthRoute  = require('./philhealth')

router.use('/philhealth',philHealthRoute)

module.exports = router;