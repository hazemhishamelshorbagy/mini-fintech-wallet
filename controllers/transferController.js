const transferService = require('../services/transferService');

const getCreateTransferPage = (req, res) => {
    res.render('createTransfer', {
        title: 'Create Transfer',
        formData: {
            fromAccountId: '',
            toAccountId: '',
            amount: ''
        }
    });
}
const createTransfer = async (req, res) => {
    try {
        const { fromAccountId, toAccountId, amount } = req.body;
        const transfer = transferService.createTransfer({
            fromAccountId: Number(fromAccountId),
            toAccountId: Number(toAccountId),
            amount: Number(amount)
        });
        res.redirect('/viewwallets');
    } catch (error) {
        const { fromAccountId, toAccountId, amount } = req.body;
        res.status(400).render('createTransfer', {
            title: 'Create Transfer',
            error: error.message,
            formData: {
                fromAccountId,
                toAccountId,
                amount
            }
        });
    }
}
const getTransactionHistory = (req, res) => {
    const transactions = transferService.getTransactions();
    res.render('transactionHistory', { 
        title: 'Transactions History',
        transactions 
    });
}
const getTransferById = (req, res) => {
    const { id } = req.params;
    const transaction = transferService.getTransferById(id);
    if (!transaction) {
        return res.status(404).render('transactionDetail', {
            title: 'Transaction Not Found',
            error: 'Transaction not found'
        });
    }
    res.render('transactionDetail', {
        title: 'Transaction Details',
        transaction
    });
}

module.exports = { createTransfer, getCreateTransferPage, getTransactionHistory, getTransferById };