const Joi = require("joi");


/**
 * @description validate philhealth payment transaction
 * @author jagannath
 * @date 24/03/2021
 */
const validate = async(req, res) => {
    const service = req.service.healthService;
    try {
        let result = await service.validatePhilHealthPayment(req.body)
        if(result.status == 200){
            return res.json(result)
        }else{
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}


/**
 * @description process philhealth payment transaction
 * @author jagannath
 * @date 24/03/2021
 */
 const process = async(req, res) => {
    const service = req.service;

    try {
        let result = await service.processPhilHealthPayment(req.body)
        if(result.status == 200){
            return res.json(result)
        }else{
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}


/**
 * @description validate philhealth payment transaction
 * @author jagannath
 * @date 24/03/2021
 */
 const inquiry = async(req, res) => {
    const service = req.service;
    try {
        let result = await service.inquiryPhilHealthPayment(req.body)
        if(result.status == 200){
            return res.json(result)
        }else{
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}



/**
 * @description validate philhealth payment transaction
 * @author jagannath
 * @date 24/03/2021
 */
 const cancel = async(req, res) => {
    const service = req.service;
    try {
        let result = await service.cancelPhilHealthPayment(schemaValidator)
        if(result.status == 200){
            return res.json(result)
        }else{
            return res.status(result.status).send(result)
        }
    } catch (error) {
        console.log('error', error);
        res.status(error.status || 500).send(error)
    }
}



module.exports = {
    validate,
    process,
    inquiry,
    cancel
}