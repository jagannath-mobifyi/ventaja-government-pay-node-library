const Joi = require("joi");


/**
 * @description validate payment
 * @author Satyam
 * @date 25/03/2021
 */
const validatePayment = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.validateIBGPayment(req.body)
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
const processPayment = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.processIBGPayment(req.body)
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
const validateShortTermLoan = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.validateShortTermLoan(req.body)
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
const processShortTermLoan = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.processShortTermLoan(req.body)
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
const validateHousingLoan = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.validateHousingLoan(req.body)
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
const processHousingLoan = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.processHousingLoan(req.body)
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
const IbgPaymentTransactionInquiry = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.IbgPaymentTransactionInquiry(req.body)
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
const IbgShortTermLoanTransactionIquiry = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.IbgShortTermLoanTransactionIquiry(req.body)
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
const IbgHousingLoanTransactionIquiry = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.IbgHousingLoanTransactionIquiry(req.body)
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
const IbgCancelPaymentTransaction = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.IbgCancelPaymentTransaction(req.body)
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
const cancelShortTermLoanTransaction = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.cancelShortTermLoanTransaction(req.body)
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
const cancelHousingLoanTransaction = async (req, res) => {
    const service = req.service.ventajaIbgPaymentService;
    try {
        let result = await service.cancelHousingLoanTransaction(req.body)
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
    validatePayment,
    processPayment,
    validateShortTermLoan,
    processShortTermLoan,
    validateHousingLoan,
    processHousingLoan,
    IbgPaymentTransactionInquiry,
    IbgShortTermLoanTransactionIquiry,
    IbgHousingLoanTransactionIquiry,
    IbgCancelPaymentTransaction,
    cancelShortTermLoanTransaction,
    cancelHousingLoanTransaction,

}