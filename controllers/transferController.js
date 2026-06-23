const transferService = require('../services/transferService');

const getCreateTransferPage = (req, res) => {
    res.render('createTransfer', {
        title: 'Create Transfer'
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
     res.redirect('/accounts');
    } catch (error) {
        res.status(400).render('createTransfer', {
            title: 'Create Transfer',
            error: error.message
        });
    }
}



module.exports = { createTransfer, getCreateTransferPage };