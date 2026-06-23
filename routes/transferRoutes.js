const express = require('express');
const { createTransfer, getCreateTransferPage } = require('../controllers/transferController');
const router = express.Router();
router.get('/createtransfer', getCreateTransferPage);
router.post('/createtransfer', createTransfer);
module.exports = router;