const express = require('express');
const { getWallets, getWalletById, createWallet, getCreateWalletPage } = require('../controllers/acountsController');
const router = express.Router();
router.get('/viewwallets', getWallets);
router.get('/walletdetails/:id', getWalletById);
router.post('/createwallet', createWallet);
router.get('/createwallet', getCreateWalletPage);
module.exports = router;