
const validateContributionSearchPrnByMember = (req, res) => {
    const service = req.service.sssPaymentService;
    console.log('service', service)
    // try {
    //     let result = await service.validatePhilHealthPayment(req.body)
    //     if(result.status == 200){
    //         return res.json(result)
    //     }else{
    //         return res.status(result.status).send(result)
    //     }
    // } catch (error) {
    //     console.log('error', error);
    //     res.status(error.status || 500).send(error)
    // }
}

module.exports = {
    validateContributionSearchPrnByMember,
}