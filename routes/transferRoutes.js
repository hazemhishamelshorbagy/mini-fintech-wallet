const express = require('express');
const { createTransfer, getCreateTransferPage, getTransactionHistory, getTransferById } = require('../controllers/transferController');
const router = express.Router();
router.get('/createtransfer', getCreateTransferPage);
router.post('/createtransfer', createTransfer);
router.get('/transactionhistory', getTransactionHistory);
router.get('/transactionDetail/:id', getTransferById);
module.exports = router;