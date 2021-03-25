/**
 * @description Bill payment
 * @author sushant
 * @date 24/03/2021
 */
const outletBalance = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.getOutletBalance();
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

const validateTopup = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.validateTopUpWallet(req.body);
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

const processTopup = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.processTopUpWallet(req.body);
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

const topupTransactionInquiry = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.topUpTransactionInquiry(req.body);
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

const processReservation = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.processReservationDetail(req.body);
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

const validatePaymentReservation = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.validateReservationPaymentDetail(req.body);
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

const processPaymentReservation = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.processReservationPaymentDetail(req.body);
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

const reservationPaymentInquiry = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.reservationPaymentEnquiry(req.body);
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

const pullTransactionDetail = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.pullTransactionDetails(req.body);
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

const validateBilling = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.validateBilling(req.body);
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

const processBilling = async (req, res) => {
  const service = req.service.billPaymentService;
  try {
    let result = await service.processBilling(req.body);
    if (result.status == 200) {
      return res.json(result);
    } else {
      return res.status(result.status).send(result);
    }
  } catch (error) {
    console.log("error", error);
    res.status(error.status || 500).send(error);
  }
};

module.exports = {
  outletBalance,
  validateTopup,
  processTopup,
  topupTransactionInquiry,
  processReservation,
  validatePaymentReservation,
  processPaymentReservation,
  reservationPaymentInquiry,
  pullTransactionDetail,
  validateBilling,
  processBilling,
};
