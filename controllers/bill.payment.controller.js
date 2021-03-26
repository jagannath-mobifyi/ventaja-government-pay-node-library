const Joi = require("joi");


/**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
const getOutletBalance = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.getOutletBalance()
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}

/**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
const validateTopUpWallet = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.validateTopUpWallet(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}


/**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
 const processTopUpWallet = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.processTopUpWallet(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
 }

 /**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
const processReservationDetail = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.processReservationDetail(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}

 /**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
  const topUpTransactionInquiry = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.topUpTransactionInquiry(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}

/**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
 const validateReservationPaymentDetail = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.validateReservationPaymentDetail(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
 }

 /**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
const processReservationPaymentDetail = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.processReservationPaymentDetail(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}

/**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
 const reservationPaymentEnquiry = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.reservationPaymentEnquiry(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
 }

 /**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
const pullTransactionDetails = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.pullTransactionDetails(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}

/**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
 const validateBilling = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.validateBilling(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}

/**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
 const processBilling = async (req, res) => {
    const service = req.service.billPaymentService;
    try {
        let result = await service.processBilling(req.body)
        if (result.status == 200) {
            return res.json(result)
        } else {
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}



module.exports = {
    getOutletBalance,
    validateTopUpWallet,
    processTopUpWallet,
    topUpTransactionInquiry,
    processReservationDetail,
    validateReservationPaymentDetail,
    processReservationPaymentDetail,
    reservationPaymentEnquiry,
    pullTransactionDetails,
    validateBilling,
    processBilling
}