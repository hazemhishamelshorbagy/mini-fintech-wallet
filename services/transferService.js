const transfers = require('../data/transfers');
const accounts= require('../data/accounts');
const createTransfer = ({ fromAccountId, toAccountId, amount }) => {
    
    const transfer = {
        id: transfers.length + 1,
        fromAccountId,
        toAccountId,
        amount,
        createdAt: new Date(),
        status: 'SUCCESS'
    };
    console.log("fromAccountId", transfer);
    if (!accounts.find(account => account.id === fromAccountId)) {
        throw new Error("From account does not exist");
    }
    if (!accounts.find(account => account.id === toAccountId)) {
        throw new Error("To account does not exist");
    }
    if (accounts.find(account => account.id === fromAccountId).balance < amount) {
        throw new Error("Insufficient balance in the from account");
    }
    if (accounts.find(account => account.id === fromAccountId).status !== "ACTIVE") {
        throw new Error("From account is not active");
    }
     
    if (!fromAccountId || !toAccountId || !amount) {
        throw new Error("Missing required fields");

    } else if (amount <= 0) {
        throw new Error("Amount must be greater than zero");
    } else if (fromAccountId === toAccountId) {
        throw new Error("Cannot transfer to the same account");
    } else if (!Number.isInteger(fromAccountId) || !Number.isInteger(toAccountId)) {
        throw new Error("Account IDs must be integers");
    } else {
        accounts.find(account => account.id === fromAccountId).balance -= amount;
        accounts.find(account => account.id === toAccountId).balance += amount;
    }
    transfers.push(transfer);
    return transfer;
}
const getTransactions = () => {
    try {
        return transfers;
    } catch (error) {
        throw new Error("Error retrieving transactions: " + error.message);
    }
 
}
const getTransferById = (id) => {
    const transaction = transfers.find(t => t.id === parseInt(id)); 
    if (!transaction) {
        throw new Error("Transaction not found");
    }
    return transaction;
}
    
    






module.exports = { createTransfer, getTransactions,getTransferById };