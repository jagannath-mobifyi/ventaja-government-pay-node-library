
const validate = async(req, res) => {
    const schema = Joi.object({

    })
    let schemaValidator = schema.validate(req.body);
    if(schemaValidator.error){
        return res.status(400).json({message: schemaValidator.error.message || 'Bad Request!', code: 400})
    }else{
        schemaValidator = schemaValidator.value
    }

    try {
        // let result = await service.sssPaymentService.processContributionSearchPrnByMember(schemaValidator)
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
    validate
}