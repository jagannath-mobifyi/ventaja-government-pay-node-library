
const validateContributionSearchPrnByMember = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.validateContributionSearchPrnByMember(req.body)
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

const processContributionSearchPrnByMember = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.processContributionSearchPrnByMember(req.body)
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

const validateContributionSearchByPrn = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.validateContributionSearchByPrn(req.body)
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

const processContributionSearchByPrn = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.processContributionSearchByPrn(req.body)
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

const validateContributionCreateAndPayPrn = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.validateContributionCreateAndPayPrn(req.body)
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

const processContributionCreateAndPayPrn = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.processContributionCreateAndPayPrn(req.body)
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

const validateContributionPayForPrn = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.validateContributionPayForPrn(req.body)
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

const processContributionPayForPrn = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.processContributionPayForPrn(req.body)
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

const validateSearchByRtplPrn = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.validateSearchByRtplPrn(req.body)
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

const processSearchByRtplPrn = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.processSearchByRtplPrn(req.body)
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

const validatePayForRtplPrn = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.validatePayForRtplPrn(req.body)
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

const processPayForRtplPrn = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.processPayForRtplPrn(req.body)
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

const validateRealEstateLoanPayment = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.validateRealEstateLoanPayment(req.body)
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

const processRealEstateLoanPayment = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.processRealEstateLoanPayment(req.body)
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

const validateMiscellaneousPayment = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.validateMiscellaneousPayment(req.body)
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

const processMiscellaneousPayment = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.processMiscellaneousPayment(req.body)
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

const inquiryContributionTransaction = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.inquiryContributionTransaction(req.body)
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

const inquiryShortTermLoanTransaction = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.inquiryShortTermLoanTransaction(req.body)
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

const inquiryRealEstateLoanTransaction = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.inquiryRealEstateLoanTransaction(req.body)
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

const inquiryMiscellaneousTransaction = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.inquiryMiscellaneousTransaction(req.body)
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

const cancelRealEstateLoanTransaction = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.cancelRealEstateLoanTransaction(req.body)
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

const cancelMiscellaneousTransaction = async(req, res) => {
    const service = req.service.sssPaymentService;
    try {
        let result = await service.cancelMiscellaneousTransaction(req.body)
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
    validateContributionSearchPrnByMember,
    processContributionSearchPrnByMember,

    validateContributionSearchByPrn,
    processContributionSearchByPrn,

    validateContributionCreateAndPayPrn,
    processContributionCreateAndPayPrn,

    validateContributionPayForPrn,
    processContributionPayForPrn,

    validateSearchByRtplPrn,
    processSearchByRtplPrn,

    validatePayForRtplPrn,
    processPayForRtplPrn,

    validateRealEstateLoanPayment,
    processRealEstateLoanPayment,

    validateMiscellaneousPayment,
    processMiscellaneousPayment,

    inquiryContributionTransaction,
    inquiryShortTermLoanTransaction,
    inquiryRealEstateLoanTransaction,
    inquiryMiscellaneousTransaction,
    
    cancelRealEstateLoanTransaction,
    cancelMiscellaneousTransaction,
}