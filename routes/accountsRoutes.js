const express = require('express');
const { getAccounts,getAccountById,createAccount,getCreateAccountPage } = require('../controllers/acountsController');
const router = express.Router();
router.get('/accounts', getAccounts);
router.get('/accountsdetail/:id', getAccountById);
router.post('/createaccount', createAccount);
router.get('/createaccount', getCreateAccountPage);
module.exports = router;